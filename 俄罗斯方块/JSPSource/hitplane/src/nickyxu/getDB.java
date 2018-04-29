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
	public Connection conn = null; // ����Connection�����ʵ��
	public Statement stmt = null; // ����Statement�����ʵ��
	public ResultSet rs = null; // ����ResultSet�����ʵ��
	private static String propFileName = "/db.properties"; // ָ����Դ�ļ������λ��
	private static Properties prop = new Properties(); // ������ʵ����Properties�����ʵ��
	private static String dbClassName = "";//���屣�����ݿ������ı���
	private static String dbUrl = "";
	private static String dbUser = "sa";
	private static String dbPwd = "";


	public static Connection getConnection() {
		Connection conn = null;
		try {			//��׽�쳣
			//��Properties�ļ���ȡ��InputStream������
			InputStream in = Config.class.getResourceAsStream(propFileName);
			prop.load(in); // ͨ���������������Properties�ļ�
			dbClassName = prop.getProperty("DB_CLASS_NAME"); // ��ȡ���ݿ�����
			dbUrl = prop.getProperty("DB_URL", dbUrl);		//��ȡURL
			dbUser = prop.getProperty("DB_USER", dbUser);	//��ȡ��¼�û�
			dbPwd = prop.getProperty("DB_PWD", dbPwd);		//��ȡ����
			System.out.println(dbUrl+"   "+dbUser+"   "+dbPwd);
		} catch (Exception e) {
			e.printStackTrace(); // ����쳣��Ϣ
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
					.println("����: DbConnectionManager.getConnection() ������ݿ�����ʧ��.\r\n\r\n��������:"
							+ dbClassName
							+ "\r\n����λ��:"
							+ dbUrl);
		}
		return conn;
	}

	public void close() {
		try { // ��׽�쳣
			if (rs != null) { // ��ResultSet�����ʵ��rs��Ϊ��ʱ
				rs.close(); // �ر�ResultSet����
			}
			if (stmt != null) { // ��Statement�����ʵ��stmt��Ϊ��ʱ
				stmt.close(); // �ر�Statement����
			}
			if (conn != null) { // ��Connection�����ʵ��conn��Ϊ��ʱ
				conn.close(); // �ر�Connection����
			}
		} catch (Exception e) {
			e.printStackTrace(System.err); // ����쳣��Ϣ
		}
	}
}
