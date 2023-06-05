FROM maven:3.8.1-jdk-11 AS build
WORKDIR /api
COPY src/ /api/src
COPY pom.xml /api
RUN mvn -f /api/pom.xml clean package -DskipTests

FROM openjdk:11-jre-slim
COPY --from=build api/target/previT-0.0.1-SNAPSHOT.jar /api/previT-0.0.1.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/api/previT-0.0.1.jar"]



