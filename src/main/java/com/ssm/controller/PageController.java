package com.ssm.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PageController {
    /**
     * 登录页面路径请求
     *
     * @return 登录页面路径
     */
    @RequestMapping("login")
    public String login() {
        return "login_1";
    }
}
