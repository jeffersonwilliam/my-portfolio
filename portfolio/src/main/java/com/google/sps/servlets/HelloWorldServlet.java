package com.google.sps.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;


import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;


/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/hello")
public class HelloWorldServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    // arraylist containing some hard coded values
    ArrayList<String> list = new ArrayList<>();
    list.add("Favorite storybook: A Tale of Two Cities");
    list.add("Favorite movie: Wrong turn");
    list.add("Favorite actor: Denzel Washington");


    // convert the array list to JSON
    String json = convertToJson(list);

    // Send the JSON as the response
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }

 /**
  * Converts a ServerStats instance into a JSON string using the Gson library.
  */
  private String convertToJson(ArrayList<String> listItems) {
    Gson gson = new Gson();
    String json = gson.toJson(listItems);

    return json;
  }

}
