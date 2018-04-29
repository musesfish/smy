package nickyxu;

import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;

import javax.servlet.jsp.jstl.core.Config;

public class getDB {
	public Connection conn = null; // 声明Connection对象的实例
	public Statement stmt = null; // 声明Statement对象的实例
	public ResultSet rs = null; // 声明ResultSet对象的实例
	private static String propFileName = "/db.properties"; // 指定资源文件保存的位置
	private static Properties prop = new Properties(); // 创建并实例化Properties对象的实例
	private static String dbClassName = "";//定义保存数据库驱动的变量
	private static String dbUrl = "";
	private static String dbUser = "sa";
	private static String dbPwd = "";


	public static Connection getConnection() {
		Connection conn = null;
		try {			//捕捉异常
			//将Properties文件读取到InputStream对象中
			InputStream in = Config.class.getResourceAsStream(propFileName);
			prop.load(in); // 通过输入流对象加载Properties文件
			dbClassName = prop.getProperty("DB_CLASS_NAME"); // 获取数据库驱动
			dbUrl = prop.getProperty("DB_URL", dbUrl);		//获取URL
			dbUser = prop.getProperty("DB_USER", dbUser);	//获取登录用户
			dbPwd = prop.getProperty("DB_PWD", dbPwd);		//获取密码
			System.out.println(dbUrl+"   "+dbUser+"   "+dbPwd);
		} catch (Exception e) {
			e.printStackTrace(); // 输出异常信息
		}
		try {
			Class.forName(dbClassName).newInstance();
			//conn = DriverManager.getConnection(dbUrl, dbUser, dbPwd);
			conn = DriverManager.getConnection(dbUrl,dbUser,dbPwd);
		} catch (Exception ee) {
			ee.printStackTrace();
		}
		if (conn == null) {
			System.err
					.println("警告: DbConnectionManager.getConnection() 获得数据库链接失败.\r\n\r\n链接类型:"
							+ dbClassName
							+ "\r\n链接位置:"
							+ dbUrl);
		}
		return conn;
	}

	public void close() {
		try { // 捕捉异常
			if (rs != null) { // 当ResultSet对象的实例rs不为空时
				rs.close(); // 关闭ResultSet对象
			}
			if (stmt != null) { // 当Statement对象的实例stmt不为空时
				stmt.close(); // 关闭Statement对象
			}
			if (conn != null) { // 当Connection对象的实例conn不为空时
				conn.close(); // 关闭Connection对象
			}
		} catch (Exception e) {
			e.printStackTrace(System.err); // 输出异常信息
		}
	}
}
