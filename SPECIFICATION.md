# Project Specification - Catering planner

|                              |                                                |
|------------------------------|------------------------------------------------|
| **Student**                  | EICHTEN Luka                                   |
| **Academic Year**            | 2026-2027                                      |
| **Course**                   | PROJ0011 - Personal Student Project            |
| **Supervisor / Coordinator** | Bernard Boigelot                               |
| **Sponsor / Client**         | VOSS Christophe, [Foodink](http://foodink.be/) |
| **Version**                  | 1.0                                            |
| **Date**                     | April 29th, 2026                               |

 
---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Project Objectives](#2-project-objectives)
3. [Stakeholders](#3-stakeholders)
4. [Scope](#4-scope)
5. [Functional Requirements](#5-functional-requirements)
6. [Non-Functional Requirements](#6-non-functional-requirements)
7. [System Design Overview](#7-system-design-overview)
8. [Feature Specifications](#8-feature-specifications)
9. [Optional / Future Features](#9-optional--future-features)
10. [Constraints & Dependencies](#10-technical-constraints--dependencies)
11. [Risks & Mitigations](#11-risks--mitigations)
12. [Deliverables & Planning](#12-deliverables--planning)
13. [Glossary](#13-glossary)

---

## 1. Introduction

### 1.1 Background

Christophe Voss owns a regional catering company [Foodink](http://foodink.be/) based in Lascheid (Belgium).
The catering service serves meals and menus to clients.
Most of the time, the meals are in the form of a buffet.
Currently, caterings are manages without any digital assistance, which creates administration issues and makes customer
analytics impossible.
In addition, the served buffets do not have proper labeling for allergens and other substances.

This project aims to supplement the catering process with a modern, configurable, and digital catering planner which
provides a digital menu card capable of filtering allergens.

### 1.2 Problem Statement

The current solution has the following limitations:

- Menu specification is missing or not well accessible for customers
- Meal allergens are not well communicated if the buffet is served before the customers arrive, decreasing customer
  satisfaction
- No customer information is currently stored which include favorite foods, general preferences, and allergens
- Customers cannot filter or search for meals based on dietary preferences.
- There is no centralized system for managing allergen information.
- The catering organization includes a lot of different aspects such as waiters, drinks, and dishes but a centralized
  checklist is missing.

The hosting solution can be discussed later during the development of the application.
Kubernetes will be used as underlying technology but the hosting platform (such as Google Cloud, AWS, Cloudflare, and
Azure) has not been specified yet.
A discussed idea is that the developer will be responsible to host the service but costs will be covered by the sponsor.

### 1.3 Proposed Solution

A web-based digital catering planning platform that allows restaurant/catering administrators to manage their menus in
real time through an admin panel.
Customers access the menu via a QR code and can filter meals by allergens or dietary type (e.g. vegan).
Admins can create an extensible and modifiable checklist which can be used and completed before every catering event.

The platform is designed to host multiple restaurants on a single server, with strict data isolation between tenants.

Anonymous website traffic can be collected to analyze meal preferences and/or improve website navigation.
A reminder for special occasions such as the yearly wedding day of previous customers would be a great addition to
improve customer satisfaction.

The project does not need warehouse management, online order management, or an installable application.
It is explicitly asked to create a web based application which is well accessible on mobile devices and computers.

---

## 2. Project Objectives

The primary objectives of this project are:

1. Deliver a functional, production-ready digital catering planner by end of Mai 2027.
2. Replace the sponsor's current menu communication method with an online alternative. Menus must be accessible by
   scanning a QR code.
3. Provide an easy-to-use admin panel so non-technical staff can manage menus without developer support.
4. Support allergen transparency and meal preferences.
5. Enhance customer management by introducing customer notes and reminders.
6. Design the platform to be multi-tenant from the ground up, enabling future commercial use beyond the initial sponsor.
7. Optionally, site analytics which help analyzing customer navigation to improve accessibility but also to analyze
   preferred meals and frequent allergens or meal preferences.

The project code should be open-sourced.
This is an explicit demand of the sponsor.

---

## 3. Stakeholders

| Role                     | Name / Description          | Involvement                                                        |
|--------------------------|-----------------------------|--------------------------------------------------------------------|
| Student / Developer      | EICHTEN Luka                | Designs, builds, and delivers the project                          |
| Sponsor / Primary Client | VOSS Christophe             | Defines requirements, validates deliverables, real-world test case |
| University Coordinator   | Bernard Boigelot            | Approves the project, evaluates the result                         |
| End Users (Customers)    | Restaurant guests           | Use the public-facing menu card                                    |
| Restaurant Admins        | Staff of client restaurants | Use the admin panel to manage content                              |

 
---

## 4. Scope

### 4.1 In Scope

- Public-facing digital menu card (web application)
- Admin panel for tenant management
- Allergen and dietary filter system
- QR code generation and access
- Multi-tenant architecture supporting multiple restaurants
- User authentication for admin access
- Configurable reminders after events
- Customer information storage (to save food preferences, allergens, and much more)
- Event checklist

### 4.2 Out of Scope

- Online ordering or payment processing
- Reservation management
- Platform native applications (iOS / Android / Windows / macOS / Linux)
- Integration with external POS (point-of-sale) systems
- Menu card export as PDF or similar
- Calendar integration (Google, Microsoft, or Apple)

---

## 5. Functional Requirements

### 5.1 Public Event Menu Display

| ID     | Requirement                                                                  | Priority |
|--------|------------------------------------------------------------------------------|----------|
| FR-1-1 | A customer can access the event menu via a unique URL.                       | Must     |
| FR-1-2 | A customer can scan a QR code to reach the event menu.                       | Must     |
| FR-1-3 | The menu card displays all available meals and menus for an event.           | Must     |
| FR-1-4 | A customer can filter meals by allergen (e.g. hide meals containing gluten). | Must     |
| FR-1-5 | A customer can filter meals by dietary type (e.g. show only vegan meals).    | Must     |
| FR-1-6 | The menu card is responsive and usable on mobile devices.                    | Must     |

### 5.2 Admin Panel

| ID     | Requirement                                                               | Priority |
|--------|---------------------------------------------------------------------------|----------|
| FR-2-1 | An admin can log in to the admin panel securely.                          | Must     |
| FR-2-2 | An admin can use Apple ID or other services to log in to the admin panel. | Optional |
| FR-2-3 | An andmin can decide if he wants to be shown on the tenant display page.  | Optional |

### 5.3 Multi-Tenant Management

| ID     | Requirement                                                               | Priority |
|--------|---------------------------------------------------------------------------|----------|
| FR-3-1 | Each tenant is isolated - data of one tenant is never visible to another. | Must     |
| FR-3-2 | A super-admin can create, edit, and delete tenant accounts.               | Must     |
| FR-3-3 | Is is possible to show all tenants on a separate tenant display page.     | Optional |

### 5.4 Customer organization

| ID     | Requirement                                                                                                                     | Pririty  |
|--------|---------------------------------------------------------------------------------------------------------------------------------|----------|
| FR-4-1 | An admin can add, edit, and delete a customer by name and additional meta-information (such as phone number and email address). | Optional |
| FR-4-2 | An admin can add, edit, and delete free text information to/from a customer.                                                    | Optional |
| FR-4-3 | An admin can add, edit, and delete allergene and food preference information to/from a customer.                                | Optional |

### 5.5 Event organization

| ID     | Requirement                                                                                          | Priority |
|--------|------------------------------------------------------------------------------------------------------|----------|
| FR-5-1 | An admin can add, edit, and delete a catering event                                                  | Must     |
| FR-5-2 | An admin can modify the event menu.                                                                  | Must     |
| FR-5-3 | An admin can add, remove, and tick points on a checklist                                             | Optional |
| FR-5-4 | An admin can add, edit, and delete reminders before and after the event                              | Optional |
| FR-5-5 | An admin can create, edit, and delete meals.                                                         | Must     |
| FR-5-6 | An admin can assign allergens and dietary tags to a meal.                                            | Must     |
| FR-5-7 | An admin can view the QR code for their events. The QR codes must not change and must remain static. | Must     |
| FR-5-8 | The allergene list is extensible and can be completed over time by the admin.                        | Must     |
| FR-5-9 | An admin can enable and disable public event menu access.                                            | Optional |

### 5.6 General

| ID     | Requirement                                                                                                                                                                                           | Priority |
|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| FR-6-1 | The website supports multiple languages different from German                                                                                                                                         | Optional |
| FR-6-2 | Site analytics are available to the super-admin (developer) to enhance accessibility based on user navigation                                                                                         | Optional |
| FR-6-3 | Limited site analytics are available to admins. They allow the analysis of users accessing meals and filtering allergenes to enable statistics. Those statistics can be used to improve served menus. | Optional |
| FR-6-4 | Self-service registration form for new tenants (QoL for the super-admin).                                                                                                                             | Optional |

---

## 6. Non-Functional Requirements

| ID     | Requirement         | Detail                                                                                                                                                             |
|--------|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| NFR-01 | **Availability**    | The application must be available online 24/7 (excluding planned maintenance).                                                                                     |
| NFR-02 | **Performance**     | The public event menu must load fast on a standard mobile connection. Operations should minimize traffic to improve user navigation in case of bad internet access |
| NFR-03 | **Security**        | Admin authentication must use JWT and optionally OAuth with hashed passwords. Tenant data must be isolated.                                                        |
| NFR-04 | **Scalability**     | The architecture must support adding new tenants without code changes.                                                                                             |
| NFR-05 | **Usability**       | The admin panel must be usable by non-technical restaurant staff without training documentation.                                                                   |
| NFR-06 | **Maintainability** | The codebase must be documented, extensible, and OpenSource.                                                                                                       |
| NFR-07 | **Accessibility**   | The public event menu display should follow WCAG 2.1 AA guidelines where feasible. Navigation should be quick and easy. No installation of apps required.          |

 
---

## 7. System Design Overview

### 7.1 Architecture

The developer is allowed to choose any architecture he wants (such as monolithic, layered, and microservices).

The application must be split in 4 parts:

- **Frontend**: serves both the public menu card and the admin panel.
- **Backend / API**:  handles business logic and data access.
- **Database**: stores all tenant, event, menu, and meal data.
- **Hosting**: to be discussed later (spring 2027)

The developer is free to select any programming language and frameworks he wants.

### 7.2 Multi-Tenancy Strategy

Tenant isolation is implemented via a shared database and a tenant ID column:

All data lives in shared tables; every record has a `tenant_id` foreign key. Simple to manage, requires careful
query-level enforcement.

### 7.3 High-Level Data Model

The following data model only contains the required features. Optional features are omitted for now. The data model will
evolve during development.

```
Restaurant (Tenant)
  ├── Admin Users
  ├── Meals
  │     ├── Name, Description
  │     └── Allergens and Dietary Tags (vegan, vegetarian, gluten-free, ...)
  └── Event
        ├── Name, Description, Active Period
        └── Meal Items (links to Meals) as event menu
   
```

### 7.4 QR Code Flow

```
QR Code → Unique Event URL → Public Event Menu
```

QR codes are static for an event.
Event are managed by the tenant.
The tenant has the possibility to download and see the QR code.
 
---

## 8. Feature Specifications

### 8.1 Allergen & Dietary Filtering

**Description**: Customers can filter the event menu to show only meals that match their preferences or hide meals
containing specific allergens.

**Supported Filters**: The system does not use any predefined filters. It is the tenant's job to complete a list of
filters over time.

**UI Behaviour**:

- Filters are displayed in a checkbox style.
- Filtering is client-side (instant).
- When a filter is active, non-matching meals are hidden.
  **Considerations**:
- Allergen data is entered by the admin - the platform does not verify accuracy. A disclaimer should be displayed to
  customers.

---

### 8.2 Admin Panel

**Description**: A protected web interface for tenant administrators to manage all event content.

**Key Interactions**:

- Login / logout with session management
- CRUD operations on meals, menus, events, and customer data
- Assigning allergens and tags to meals
- Downloading and inspecting the restaurant QR code

**Problems & Solutions**:

| Problem                                        | Solution                                           |
|------------------------------------------------|----------------------------------------------------|
| Admin accidentally deletes a meal              | Recycle bin                                        |
| Two admins edit the same record simultaneously | Optimistic locking                                 |
| Admin loses access (forgotten password)        | Super-admin override, optional AppleID integration |

  
---

### 8.3 Multi-Tenant Architecture

**Description**: A single deployed instance of the application serves multiple restaurants. Each restaurant's data is
fully isolated.

**Key Design Decisions**:

- Tenant identification: each request is scoped to a tenant via URL path segment and JWT claim.
- A super-admin account can create tenants, view all tenants, and reset credentials. Tenant data (such as events,
  customers, and meals) modification or inspection is not allowed by the super admin.
- Self-registration: not allowed at launch.

**Problems & Solutions**:

| Problem                                                | Solution                                                                   |
|--------------------------------------------------------|----------------------------------------------------------------------------|
| A bug causes data from tenant A to appear for tenant B | Strict query-level tenant scoping; automated integration tests per tenant  |
| A restaurant needs to be deleted                       | Cascade delete of all tenant data                                          |
| Tenant onboarding                                      | Manual super-admin creation, self-service registration form (optional QoL) |

  
---

### 8.4 QR Code Access

**Description**: Each event has a unique QR code that links directly to its public event menu.

**QR Code Type**: Static - fixed URL that never changes

**Granularity**: One QR code per event

**Admin Capability**: Admins can view and download their QR code from the admin panel.

**Considerations**:

- If QR codes are static, the URL structure must be stable - changing the routing will break printed codes.

---

## 9. Optional / Future Features

These features are explicitly out of scope for the initial delivery but are noted for future development:

| Feature                                                    | Description                                                                                                                                          | Rationale for deferral                                                                                                                                              |
|------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **FR-2-2**: SSO integration to login                       | An admin can use Apple ID or other services to lig in to the admin panel.                                                                            | This requires extra setup which involves integrations with other services and tools. This should be one of the first optional features.                             |
| **FR-2-3** and **FR-3-3**: Tenant display page             | Web application shows a list of every tenant which is connected to the application. It should be configurable for tenants to be shown on such a page | This is not required by the client but adds trustworthyness if known tenants are listed.                                                                            |
| **FR-4-1** to **FR-4-3**: Customer storage and information | Customer information can be stored inside the application.                                                                                           | This feature is a QoL feature.                                                                                                                                      |
| **FR-5-3**: Checklist management                           | An admin can add, remove, and tick points on a checklist.                                                                                            | This feature is a QoL management feature.                                                                                                                           |
| **FR-5-4**: Reminder management                            | An admin can add, edit, and delete reminders before and after the event.                                                                             | This feature is a QoL magagement feature.                                                                                                                           |
| **FR-5-9**: Public event menu visibility toggle            | An admin can enable and disable public event menu access.                                                                                            | This feature was not asked by the sponsor but can extend the functionality.                                                                                         |
| **FR-6-1**: Internationalization                           | The website supports multiple languages different from German.                                                                                       | This feature was not asked by the sponsor but improved platform accessibility, its reach, and facilitates testing by the teaching staff of the University of Liège. |
| **FR-6-2** and **FR-6-3**: Site analytics                  | Site analytics can be used by the super-admin (developer) to improve website accessibility and by the tenants to adapt served meals.                 | Those are QoL features for the developer and tenants which may result in an increate of customer satisfaction.                                                      |
| **FR-6-4**: Registration form                              | Self-service registration form for new tenants.                                                                                                      | This feature is a pure quality of life feature for the super admin and decreased the number of mail exchanges.                                                      |
| [Feature from meeting]                                     | [Description]                                                                                                                                        | [Reason]                                                                                                                                                            |

 
---

## 10. Technical Constraints & Dependencies

### 10.1 Technical Constraints

| Constraint                    | Detail                                                                |
|-------------------------------|-----------------------------------------------------------------------|
| University stack requirements | None, *to be discussed*                                               |
| Hosting environment           | Kubernetes, *details to be discussed in spring 2027 with the sponsor* |
| Budget                        | No budget, developer can use his home server for testing              |
| Timeline                      | Project must be completed by end of May 2027                          |

### 10.2 External Dependencies

| Dependency                        | Purpose                 | Risk if unavailable                  |
|-----------------------------------|-------------------------|--------------------------------------|
| QR code library                   | QR code generation      | Low - multiple alternatives exist    |
| Email provider                    | Password reset emails   | Medium - affects admin recovery flow |
| Hosting platform                  | Deployment              | Medium                               |
| Authentication library / provider | Admin login             | Medium                               |
| Used technologies                 | Application Development | High - must be resolved early        |

 
---

## 11. Risks & Mitigations

| Risk                                          | Likelihood | Impact | Mitigation                                                                                             |
|-----------------------------------------------|------------|--------|--------------------------------------------------------------------------------------------------------|
| Scope creep from sponsor requests             | Low        | High   | Any new requirements after sign-off require written agreement and may be marked as "Optional Features" |
| Multi-tenant data leak due to missing scoping | Medium     | High   | Automated tests that verify cross-tenant data isolation                                                |
| Hosting costs exceed budget                   | Low        | Medium | Choose a free-tier platform for development; confirm hosting arrangement with sponsor                  |
| Sponsor unavailable for feedback              | Medium     | Medium | Schedule review checkpoints in advance; use async communication                                        |
| University coordinator rejects scope          | Low        | High   | Request early informal feedback before full submission                                                 |

 
---

## 12. Deliverables & Planning

### 12.1 Academic Deliverables

| Deliverable                     | Description                                      | Due Date                             |
|---------------------------------|--------------------------------------------------|--------------------------------------|
| Project Specification           | This document                                    | *unknown*                            |
| January report                  | Intermediate report of the project               | January 2027, *precise date unknown* |
| Final application               | Deployed, functional application                 | June 2027, *precise date unknown*    |
| Presentation, defense, and demo | Scheduled project presentation by the University | June 2027, *precise date unknown*    |
| Technical report                | Report of the development of the project         | June 2027, *precise date unknown*    |

### 12.2 High-Level Milestones

| Milestone                                               | Target Date            |
|---------------------------------------------------------|------------------------|
| Requirements finalised & spec approved                  | September 2026         |
| Tech stack decided & project scaffolded                 | Begin of October 2026  |
| Database schema & multi-tenant architecture implemented | End of October 2026    |
| Core meal & menu CRUD complete                          | November 2026          |
| Allergen filtering implemented                          | November 2026          |
| Admin panel complete                                    | Begin of December 2026 |
| QR code access working end-to-end                       | March 2027             |
| Testing & bug fixing                                    | April 2027             |
| Deployment & sponsor handover                           | May 2027               |
| Final submission                                        | End of May 2027        |

 
---

## 13. Glossary

| Term            | Definition                                                                                          |
|-----------------|-----------------------------------------------------------------------------------------------------|
| **Tenant**      | A single restaurant or organisation using the platform. Each tenant's data is isolated from others. |
| **Customer**    | The people which are served by the tenant on a catering event.                                      |
| **Developer**   | Luka Eichten who will implement the project for a course of the University of Liège.                |
| **Sponsor**     | Christophe Voss which proposed the project to the developer.                                        |
| **Admin**       | A user with access to the admin panel, typically a restaurant manager or staff member.              |
| **Super-admin** | A platform-level administrator who manages tenant accounts.                                         |
| **Event**       | A catering job of the tenant.                                                                       |
| **Menu**        | A composed set of meals offered together.                                                           |
| **Meal**        | An individual dish or food item with its own name, description, allergens, and dietary tags.        |
| **Allergen**    | A substance that may cause an allergic reaction.                                                    |
| **QR Code**     | A machine-readable optical label that encodes the URL of a restaurant's menu card.                  |
| **CRUD**        | Create, Read, Update, Delete — the four basic operations for managing data.                         |

 
---

*Document prepared by Luka Eichten - May 4th, 2026*

*Version 1.0 - Pending coordinator approval*
