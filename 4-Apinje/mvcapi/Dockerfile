# Use the official .NET SDK image
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /source

# Copy csproj and restore as distinct layers
COPY *.csproj .
RUN dotnet restore

# Copy everything else and build
COPY . .
RUN dotnet publish -c Release -o /app

# Final stage: run the app in a lightweight container
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app .

# Copy data
COPY data /data

ENV ASPNETCORE_ENVIRONMENT=Development
ENV OriginsCors=http://localhost,http://localhost:4200

EXPOSE 8080
ENTRYPOINT ["dotnet", "mvcapi.dll"]
