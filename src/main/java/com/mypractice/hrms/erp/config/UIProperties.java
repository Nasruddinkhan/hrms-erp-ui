package com.mypractice.hrms.erp.config;

import java.util.HashMap;
import java.util.Map;
import lombok.Getter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@Getter
@ConfigurationProperties
public class UIProperties {

    private final Map<String, String> uiProperties = new HashMap<>();

}