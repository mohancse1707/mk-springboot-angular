package com.mohan.sample.to;

/**
 * Created by s726337 on 25/04/2017.
 */
public class UserTo {


    public UserTo(String username){
        this.username = username;
    }
    private String username;
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
