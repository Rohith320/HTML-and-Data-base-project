<%@ page import="java.sql.*"%>
<%
String name=request.getParameter("name");
String email=request.getParameter("email");
String mobilenum=request.getParameter("mobilenum"); 
String password=request.getParameter("password");
String cpassword=request.getParameter("cpassword");

try{
  Class.forName("oracle.jdbc.driver.OracleDriver");
    Connection conn=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","syst","manager");
    PreparedStatement ps=conn.prepareStatement("insert into useridd values(?,?,?,?,?)");
    ps.setString(1,name);
    ps.setString(2,email);
    ps.setString(3,mobilenum);
    ps.setString(4,password);
    ps.setString(5,cpassword);
    int x=ps.executeUpdate();
}
catch(Exception e){
  out.println(e);
}
%>
<html>
<head>
<link rel = "icon" href =  "tabicon.png" type = "image/x-icon">
        <title>Grocery Store</title>
</head>
<style>
.center{
text-align: center;
font-size: medium;
}
.body{
background: linear-gradient(to right, #00d2ff, #928dab);
font-color: white;
}
</style>
<body>
<div class = "center">
<a href = "HOMEPAGE.html">You have entered the details successfully, Click Here to Access the HOME PAGE</a>
</div>
</body>
</html>