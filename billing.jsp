<%@ page import="java.sql.*"%>
<%
String state =request.getParameter("state");
String city =request.getParameter("city");
String zipcode =request.getParameter("zipcode");
String street1 =request.getParameter("street1");
String street2 =request.getParameter("street2");
String email =request.getParameter("email");
String fname =request.getParameter("fname"); 
String lname =request.getParameter("lname"); 
String cnumber =request.getParameter("cnumber");
String exp =request.getParameter("exp");
String cvv =request.getParameter("cvv");


try{
  Class.forName("oracle.jdbc.driver.OracleDriver");
    Connection conn=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","syst","manager");
    PreparedStatement ps=conn.prepareStatement("insert into billingadd values(?,?,?,?,?,?,?,?,?,?,?)");
    ps.setString(1,state);
    ps.setString(2, city);
    ps.setString(3, zipcode);
    ps.setString(4, street1);
    ps.setString(5, street2);
    ps.setString(6, email);
    ps.setString(7, fname);
    ps.setString(8, lname);
    ps.setString(9, cnumber);
    ps.setString(10, exp);
    ps.setString(11, cvv);
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
<a href = "Thankyou.html">You have placed the Order Successfully, Click Here to Continue</a>
</div>
</body>
</html>