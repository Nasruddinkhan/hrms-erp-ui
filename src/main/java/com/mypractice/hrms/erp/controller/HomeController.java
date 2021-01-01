package com.mypractice.hrms.erp.controller;

import com.mypractice.hrms.erp.config.UIProperties;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.simple.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.PostConstruct;
import java.util.Base64;
import java.util.Map;

@Slf4j
@Controller
@CrossOrigin(value = "*")
@RequiredArgsConstructor
public class HomeController {

    public static final String INDEX = "index";
    private final UIProperties uiProperties;
    private String encodedProperties;


    @PostConstruct
    public void init() {
        Map<String, String> properties = uiProperties.getUiProperties();
        String stringifyProperties = new JSONObject(properties).toJSONString();
        encodedProperties = new String(Base64.getEncoder().encode(stringifyProperties.getBytes()));
    }

    @GetMapping(value = "/")
    public String landingPage() {
        return INDEX;
    }

    @GetMapping(value = "/properties")
    @ResponseBody
    public String getProperties() {
        log.debug("Returning properties:\n {}", encodedProperties);
        return encodedProperties;
    }

}