FROM openjdk:8-jdk-alpine
ADD target/hrms-erp-ui.jar hrms-erp-ui.jar
EXPOSE 8085
ENTRYPOINT ["java", "-jar", "hrms-erp-ui.jar"]
