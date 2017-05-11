package com.mohan.sample;

import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;
import org.springframework.web.servlet.DispatcherServlet;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;

@Configuration
@ImportResource("classpath:config/mk-spring-security.xml")
public class ApplicationWebXml extends SpringBootServletInitializer {


    @Override
    public void onStartup(ServletContext container) throws ServletException {

     /*   XmlWebApplicationContext appContext = new XmlWebApplicationContext();
        appContext.setConfigLocation("");
*/
        ServletRegistration.Dynamic registration = container.addServlet("dispatcher", new DispatcherServlet());
        registration.setLoadOnStartup(1);
        registration.addMapping("/");
        super.onStartup(container);
    }
}