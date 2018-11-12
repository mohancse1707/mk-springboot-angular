package com.mohan.sample.controller;


import com.mohan.sample.to.UserTo;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Mohan on 01/03/2017.
 */
@RestController
@RequestMapping("app/rest/auth")
public class LoginRestController {

    @RequestMapping(value = "/loggedInAccount",method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UserTo> getLoggedInAccount(){
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        System.out.println("Logged in User names "+username);
        return new ResponseEntity<UserTo>(new UserTo(username), HttpStatus.OK);
    }
}
