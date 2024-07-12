# Azure-Resume

This project showcases a simple HTML resume hosted on an Azure Static Website with an Azure Function to count the number of visitors. The project demonstrates skills in Azure cloud services, web development, and GitHub workflows.

## Table of Contents

- [Project Overview](#project-overview)
- [Tools and Technologies](#tools-and-technologies)
- [Setup Instructions](#setup-instructions)
  - [Prerequisites](#prerequisites)
  - [VS Code Setup](#vs-code-setup)
  - [GitHub Setup](#github-setup)
  - [Azure Setup](#azure-setup)
  - [Deploying the Website](#deploying-the-website)
  - [Creating the Azure Function](#creating-the-azure-function)
- [File Structure](#file-structure)
- [License](#license)

## Project Overview

This project aims to create a resume website using HTML, CSS, and JavaScript, and host it on Azure as a static website. Additionally, an Azure Function is used to count the number of visitors to the website.

## Tools and Technologies

- **Visual Studio Code**
- **Git**
- **Azure CLI**
- **GitHub**
- **Azure Static Website**
- **Azure Functions**

## Setup Instructions

### Prerequisites

- [Visual Studio Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)
- [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)
- GitHub account
- Azure account

### VS Code Setup

1. **Install Extensions:**
   - Open VS Code.
   - Go to the Extensions view by clicking on the Extensions icon in the Activity Bar or pressing `Ctrl+Shift+X`.
   - Install the following extensions:
     - Azure Tools (`ms-vscode.vscode-node-azure-pack`)
     - HTML CSS Support (`ecmel.vscode-html-css`)
     - Live Server (`ritwickdey.liveserver`)
     - Prettier - Code Formatter (`esbenp.prettier-vscode`)
     - GitHub (`GitHub.vscode-pull-request-github`)
     - Azure Functions (`ms-azuretools.vscode-azurefunctions`)

2. **Configure Git:**
   - Ensure Git is installed on your system.
   - Configure Git with your username and email:
     ```bash
     git config --global user.name "Your Name"
     git config --global user.email "your.email@example.com"
     ```

### GitHub Setup

1. **Create Repository:**
   - Go to GitHub and create a new repository named `Azure-Resume`.

2. **Clone Repository:**
   - Open VS Code.
   - Open the Command Palette (`Ctrl+Shift+P`) and type `Git: Clone`.
   - Enter the repository URL (`https://github.com/jdan38/Azure-Resume.git`) and choose a local directory to clone the repository.

### Azure Setup

1. **Create Storage Account:**
   ```bash
   az storage account create --name resumeaz --location eastus --resource-group YourResourceGroup --sku Standard_LRS
