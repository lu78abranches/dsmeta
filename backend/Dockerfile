FROM maven:3.8.5-openjdk-17 AS build
COPY . .
RUN mvn clean package -DskipTests

FROM eclipse-temurin:17-jdk-alpine
COPY --from=build target/coremetrics-0.0.1-SNAPSHOT.jar coremetrics.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","coremetrics.jar"]
