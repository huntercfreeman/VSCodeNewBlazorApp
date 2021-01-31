export let templateFiles = {
    "templatedComponentRazor": getTemplatedComponentRazor("TemplatedComponent"),
    "templatedComponentCodebehind": getTemplatedComponentCodebehind("TemplatedComponent", "BlazorExtension"),
    "solutionContent": getSolutionContent(),
    "projectContent": getProjectContent(),
    "launchSettings": getLaunchSettings(),
    "siteCss": getSiteCss(),
    "hostCshtml": getHostCshtml(),
    "counterRazor": getCounterRazor(),
    "mainLayoutRazor": getMainLayoutRazor(),
    "importsRazor": getImportsRazor(),
    "appRazor": getAppRazor(),
    "appSettingsJson": getAppSettingsJson(),
    "programCs": getProgramCs(),
    "startupCs": getStartupCs()
};

export function getTemplatedComponentRazor(componentName : string): string {
    return `<h3>${componentName}</h3>

@code {

}
`;
}

export function getTemplatedComponentCodebehind(componentName : string, namespace : string): string {
    return `using Microsoft.AspNetCore.Components;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ${namespace}
{
    public partial class ${componentName} : ComponentBase
    {
    }
}
`;
}

function getSolutionContent(): string {
    return `Microsoft Visual Studio Solution File, Format Version 12.00
# Visual Studio Version 16
VisualStudioVersion = 16.0.30804.86
MinimumVisualStudioVersion = 10.0.40219.1
Project("{FAE04EC0-301F-11D3-BF4B-00C04F79EFBC}") = "BlazorTemplatedServerSide", "BlazorTemplatedServerSide.csproj", "{28D78914-6A26-4DD1-9050-7404DD0E00E5}"
EndProject
Global
    GlobalSection(SolutionConfigurationPlatforms) = preSolution
        Debug|Any CPU = Debug|Any CPU
        Release|Any CPU = Release|Any CPU
    EndGlobalSection
    GlobalSection(ProjectConfigurationPlatforms) = postSolution
        {28D78914-6A26-4DD1-9050-7404DD0E00E5}.Debug|Any CPU.ActiveCfg = Debug|Any CPU
        {28D78914-6A26-4DD1-9050-7404DD0E00E5}.Debug|Any CPU.Build.0 = Debug|Any CPU
        {28D78914-6A26-4DD1-9050-7404DD0E00E5}.Release|Any CPU.ActiveCfg = Release|Any CPU
        {28D78914-6A26-4DD1-9050-7404DD0E00E5}.Release|Any CPU.Build.0 = Release|Any CPU
    EndGlobalSection
    GlobalSection(SolutionProperties) = preSolution
        HideSolutionNode = FALSE
    EndGlobalSection
    GlobalSection(ExtensibilityGlobals) = postSolution
        SolutionGuid = {804061FE-2E86-4859-8614-FDAC36438F67}
    EndGlobalSection
EndGlobal`;
}

function getProjectContent(): string {
    return `<Project Sdk="Microsoft.NET.Sdk.Web">

    <PropertyGroup>
        <TargetFramework>netcoreapp3.1</TargetFramework>
    </PropertyGroup>

</Project>`;
}

function getLaunchSettings(): string {
    return `{
    "iisSettings": {
        "windowsAuthentication": false,
        "anonymousAuthentication": true,
        "iisExpress": {
            "applicationUrl": "http://localhost:51456",
            "sslPort": 44362
        }
    },
    "profiles": {
        "IIS Express": {
            "commandName": "IISExpress",
            "launchBrowser": true,
            "environmentVariables": {
                "ASPNETCORE_ENVIRONMENT": "Development"
            }
        },
        "BlazorTemplatedServerSide": {
            "commandName": "Project",
            "launchBrowser": true,
            "applicationUrl": "https://localhost:5001;http://localhost:5000",
            "environmentVariables": {
                "ASPNETCORE_ENVIRONMENT": "Development"
            }
        }
    }
}`;}

function getSiteCss(): string {
    return `@import url('open-iconic/font/css/open-iconic-bootstrap.min.css');

html, body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

a, .btn-link {
    color: #0366d6;
}

.btn-primary {
    color: #fff;
    background-color: #1b6ec2;
    border-color: #1861ac;
}

app {
    position: relative;
    display: flex;
    flex-direction: column;
}

.top-row {
    height: 3.5rem;
    display: flex;
    align-items: center;
}

.main {
    flex: 1;
}

    .main .top-row {
        background-color: #f7f7f7;
        border-bottom: 1px solid #d6d5d5;
        justify-content: flex-end;
    }

        .main .top-row > a, .main .top-row .btn-link {
            white-space: nowrap;
            margin-left: 1.5rem;
        }

.main .top-row a:first-child {
    overflow: hidden;
    text-overflow: ellipsis;
}

.sidebar {
    background-image: linear-gradient(180deg, rgb(5, 39, 103) 0%, #3a0647 70%);
}

    .sidebar .top-row {
        background-color: rgba(0,0,0,0.4);
    }

    .sidebar .navbar-brand {
        font-size: 1.1rem;
    }

    .sidebar .oi {
        width: 2rem;
        font-size: 1.1rem;
        vertical-align: text-top;
        top: -2px;
    }

    .sidebar .nav-item {
        font-size: 0.9rem;
        padding-bottom: 0.5rem;
    }

        .sidebar .nav-item:first-of-type {
            padding-top: 1rem;
        }

        .sidebar .nav-item:last-of-type {
            padding-bottom: 1rem;
        }

        .sidebar .nav-item a {
            color: #d7d7d7;
            border-radius: 4px;
            height: 3rem;
            display: flex;
            align-items: center;
            line-height: 3rem;
        }

            .sidebar .nav-item a.active {
                background-color: rgba(255,255,255,0.25);
                color: white;
            }

            .sidebar .nav-item a:hover {
                background-color: rgba(255,255,255,0.1);
                color: white;
            }

.content {
    padding-top: 1.1rem;
}

.navbar-toggler {
    background-color: rgba(255, 255, 255, 0.1);
}

.valid.modified:not([type=checkbox]) {
    outline: 1px solid #26b050;
}

.invalid {
    outline: 1px solid red;
}

.validation-message {
    color: red;
}

#blazor-error-ui {
    background: lightyellow;
    bottom: 0;
    box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.2);
    display: none;
    left: 0;
    padding: 0.6rem 1.25rem 0.7rem 1.25rem;
    position: fixed;
    width: 100%;
    z-index: 1000;
}

#blazor-error-ui .dismiss {
    cursor: pointer;
    position: absolute;
    right: 0.75rem;
    top: 0.5rem;
}

@media (max-width: 767.98px) {
    .main .top-row:not(.auth) {
        display: none;
    }

    .main .top-row.auth {
        justify-content: space-between;
    }

    .main .top-row a, .main .top-row .btn-link {
        margin-left: 0;
    }
}

@media (min-width: 768px) {
    app {
        flex-direction: row;
    }

    .sidebar {
        width: 250px;
        height: 100vh;
        position: sticky;
        top: 0;
    }

    .main .top-row {
        position: sticky;
        top: 0;
    }

    .main > div {
        padding-left: 2rem !important;
        padding-right: 1.5rem !important;
    }

    .navbar-toggler {
        display: none;
    }

    .sidebar .collapse {
        /* Never collapse the sidebar for wide screens */
        display: block;
    }
}`;
}

function getHostCshtml(): string {
    return `@page "/"
@namespace BlazorTemplatedServerSide.Pages
@addTagHelper *, Microsoft.AspNetCore.Mvc.TagHelpers
@{
    Layout = null;
}

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>BlazorTemplatedServerSide</title>
    <base href="~/" />
    <link rel="stylesheet" href="css/bootstrap/bootstrap.min.css" />
    <link href="css/site.css" rel="stylesheet" />
</head>
<body>
    <app>
        <component type="typeof(App)" render-mode="ServerPrerendered" />
    </app>

    <div id="blazor-error-ui">
        <environment include="Staging,Production">
            An error has occurred. This application may no longer respond until reloaded.
        </environment>
        <environment include="Development">
            An unhandled exception has occurred. See browser dev tools for details.
        </environment>
        <a href="" class="reload">Reload</a>
        <a class="dismiss">🗙</a>
    </div>

    <script src="_framework/blazor.server.js"></script>
</body>
</html>`;
}

function getCounterRazor(): string {
    return `@page "/"

<h1>Hello, world!</h1>

Welcome to your new app.

<p>Current count: @currentCount</p>

<button class="btn btn-primary" @onclick="IncrementCount">Click me</button>

@code {
    private int currentCount = 0;

    private void IncrementCount()
    {
        currentCount++;
    }
}`;
}

function getMainLayoutRazor(): string {
    return `@inherits LayoutComponentBase

<div class="main">
    <div class="top-row px-4">
        <a href="https://docs.microsoft.com/aspnet/" target="_blank">About</a>
    </div>

    <div class="content px-4">
        @Body
    </div>
</div>`;
}

function getImportsRazor(): string {
    return `@using System.Net.Http
@using Microsoft.AspNetCore.Authorization
@using Microsoft.AspNetCore.Components.Authorization
@using Microsoft.AspNetCore.Components.Forms
@using Microsoft.AspNetCore.Components.Routing
@using Microsoft.AspNetCore.Components.Web
@using Microsoft.JSInterop
@using BlazorTemplatedServerSide
@using BlazorTemplatedServerSide.Shared`;
}

function getAppRazor(): string {
    return `
<Router AppAssembly="@typeof(Program).Assembly">
    <Found Context="routeData">
        <RouteView RouteData="@routeData" DefaultLayout="@typeof(MainLayout)" />
    </Found>
    <NotFound>
        <LayoutView Layout="@typeof(MainLayout)">
            <p>Sorry, there's nothing at this address.</p>
        </LayoutView>
    </NotFound>
</Router>
    `;
}

function getAppSettingsJson(): string {
    return `{
    "Logging": {
        "LogLevel": {
        "Default": "Information",
        "Microsoft": "Warning",
        "Microsoft.Hosting.Lifetime": "Information"
        }
    },
    "AllowedHosts": "*"
}
      `;
}

function getProgramCs(): string {
    return `using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorTemplatedServerSide
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}`;
}

function getStartupCs(): string {
    return `using BlazorTemplatedServerSide.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorTemplatedServerSide
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddRazorPages();
            services.AddServerSideBlazor();
            services.AddSingleton<WeatherForecastService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapBlazorHub();
                endpoints.MapFallbackToPage("/_Host");
            });
        }
    }
}`;
}