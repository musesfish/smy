package nickyxu;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class getScore extends HttpServlet {

	/**
	 * The doGet method of the servlet. <br>
	 *
	 * This method is called when a form has its tag value method equals to get.
	 * 
	 * @param request the request send by the client to the server
	 * @param response the response send by the server to the client
	 * @throws ServletException if an error occurred
	 * @throws IOException if an error occurred
	 */
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.setContentType("text/html;charset=utf-8");
		request.setCharacterEncoding("utf-8");
		PrintWriter out = response.getWriter();
		out.print("<html><head><script type='text/javascript' src='js.js'></script><link href='css.css' rel='stylesheet' type='text/css'></head>");
		out.print(" <table  class='altrowstable'  ><tr><td colspan='4'>排行榜</td> </tr><tr> <td>验证ID</td><td>用户名</td><td>分数</td><td>提交时间</td> </tr>");
		String sql ="";
		Connection con =null;
		PreparedStatement ps=null;
		ResultSet rs = null;
		con = getDB.getConnection();
		sql = "select * from mygame";

		try {
			ps=con.prepareStatement(sql);
			rs = ps.executeQuery();
			while(rs.next()){
				out.println("<tr><td>"+rs.getString(1)+"</td><td>"+rs.getString(3)+"</td><td>"+rs.getString(2)+"</td><td>"+rs.getString(4)+"</td></tr>");
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		out.println("</table>");
		out.println("</html>");
		//out.flush();
		//out.close();
	}

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub

		response.setContentType("text/html;charset=utf-8");
		request.setCharacterEncoding("utf-8");
		PrintWriter out = response.getWriter();
		out.print("<html><head><script type='text/javascript' src='js.js'></script><link href='css.css' rel='stylesheet' type='text/css'></head>");
		out.print(" <table  class='altrowstable'  ><tr><td colspan='4'>排行榜</td> </tr><tr> <td>排名</td><td>用户名</td><td>分数</td><td>提交时间</td> </tr>");
		String sql ="";
		Connection con =null;
		PreparedStatement ps=null;
		ResultSet rs = null;
		con = getDB.getConnection();
		sql = "select top(5) * from mygame order by score desc";

		try {
			ps=con.prepareStatement(sql);
			rs = ps.executeQuery();
			int i=1;
			while(rs.next()){
				out.println("<tr><td>"+i+"</td><td>"+rs.getString(3)+"</td><td>"+rs.getString(2)+"</td><td>"+rs.getString(4)+"</td></tr>");
				i++;
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		out.println("</table>");
		out.println("</html>");
		
		
		//out.flush();
		//out.close();
	}

}
