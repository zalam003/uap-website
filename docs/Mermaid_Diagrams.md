# UAP Website Mermaid Diagrams for MS Word Documentation

## Diagram 1: Website Architecture

```mermaid
graph TB
    subgraph "User Types"
        A[Prospective Students]
        B[Current Students]
        C[Faculty & Staff]
        D[Alumni & Parents]
        E[Industry Partners]
    end

    subgraph "Frontend Layer (Next.js 14)"
        F[Landing Page]
        G[Academic Programs]
        H[Admissions Portal]
        I[Student Dashboard]
        J[Faculty Profiles]
        K[Research Centers]
        L[Campus Life]
        M[News & Events]
    end

    subgraph "API & Backend Services"
        N[GraphQL API]
        O[REST API]
        P[Authentication Service]
        Q[Search Service]
        R[Payment Gateway]
        S[Notification Service]
    end

    subgraph "Content Management"
        T[Strapi CMS]
        U[Media Library]
        V[Content Editor]
        W[Workflow Management]
    end

    subgraph "Data Layer"
        X[PostgreSQL Database]
        Y[Student Information System]
        Z[Document Storage]
        AA[Analytics Database]
    end

    subgraph "External Integrations"
        BB[Google Analytics]
        CC[Social Media APIs]
        DD[Email Service]
        EE[Virtual Tour Platform]
        FF[Live Chat System]
    end

    subgraph "Infrastructure"
        GG[Vercel Hosting]
        HH[Cloudflare CDN]
        II[GitHub Repository]
        JJ[CI/CD Pipeline]
    end

    %% User Flows
    A --> F
    A --> G
    A --> H
    B --> I
    B --> M
    C --> J
    C --> K
    D --> M
    D --> L
    E --> K
    E --> J

    %% Frontend to Backend
    F --> N
    G --> N
    H --> O
    I --> P
    J --> N
    K --> N
    L --> N
    M --> N

    %% Backend to Services
    N --> T
    O --> T
    P --> Y
    Q --> X
    R --> DD
    S --> DD

    %% CMS to Data
    T --> X
    U --> Z
    V --> T
    W --> T

    %% External Connections
    N --> BB
    O --> CC
    S --> FF
    L --> EE

    %% Infrastructure
    F --> GG
    GG --> HH
    II --> JJ
    JJ --> GG
```

## Diagram 2: User Journey Flow

```mermaid
flowchart TD
    Start([User Visits Website]) --> UserType{User Type Detection}
    
    UserType -->|Prospective Student| PS[Prospective Student Journey]
    UserType -->|Current Student| CS[Current Student Journey]
    UserType -->|Faculty/Staff| FS[Faculty/Staff Journey]
    UserType -->|Alumni/Parent| AP[Alumni/Parent Journey]
    UserType -->|Industry Partner| IP[Industry Partner Journey]

    %% Prospective Student Journey
    PS --> PS1[Explore Programs]
    PS1 --> PS2[View Admission Requirements]
    PS2 --> PS3[Virtual Campus Tour]
    PS3 --> PS4[Apply Online]
    PS4 --> PS5[Track Application]
    PS5 --> PS6[Enrollment Confirmation]

    %% Current Student Journey
    CS --> CS1[Student Portal Login]
    CS1 --> CS2[View Academic Records]
    CS2 --> CS3[Course Registration]
    CS3 --> CS4[Access Resources]
    CS4 --> CS5[Campus Services]
    CS5 --> CS6[Event Participation]

    %% Faculty/Staff Journey
    FS --> FS1[Faculty Portal Access]
    FS1 --> FS2[Course Management]
    FS2 --> FS3[Research Collaboration]
    FS3 --> FS4[Publication Management]
    FS4 --> FS5[Administrative Tasks]

    %% Alumni/Parent Journey
    AP --> AP1[Alumni Network]
    AP1 --> AP2[News & Updates]
    AP2 --> AP3[Event Information]
    AP3 --> AP4[Donation Portal]
    AP4 --> AP5[Mentorship Programs]

    %% Industry Partner Journey
    IP --> IP1[Research Partnerships]
    IP1 --> IP2[Faculty Collaboration]
    IP2 --> IP3[Student Recruitment]
    IP3 --> IP4[Innovation Projects]
    IP4 --> IP5[Corporate Training]

    %% Common Features
    PS6 --> Common[Common Features]
    CS6 --> Common
    FS5 --> Common
    AP5 --> Common
    IP5 --> Common

    Common --> CF1[Search Functionality]
    Common --> CF2[Multilingual Support]
    Common --> CF3[Accessibility Features]
    Common --> CF4[Mobile Optimization]
    Common --> CF5[Contact Support]

    %% Conversion Points
    PS4 --> Conv1[Application Submission]
    CS3 --> Conv2[Course Enrollment]
    AP4 --> Conv3[Alumni Engagement]
    IP4 --> Conv4[Partnership Agreement]

    %% Analytics & Optimization
    Conv1 --> Analytics[Analytics Dashboard]
    Conv2 --> Analytics
    Conv3 --> Analytics
    Conv4 --> Analytics
```

## Diagram 3: Information Architecture

```mermaid
graph TD
    A[UAP Website Home] --> B[Academics]
    A --> C[Admissions]
    A --> D[Research]
    A --> E[Campus Life]
    A --> F[About UAP]
    A --> G[News & Events]

    B --> B1[Undergraduate Programs]
    B --> B2[Graduate Programs]
    B --> B3[Faculty Directory]
    B --> B4[Academic Calendar]
    B --> B5[Course Catalog]

    B1 --> B1a[Engineering]
    B1 --> B1b[Business]
    B1 --> B1c[Social Sciences]
    B1 --> B1d[Architecture]

    C --> C1[How to Apply]
    C --> C2[Requirements]
    C --> C3[Scholarships]
    C --> C4[International Students]
    C --> C5[Application Portal]

    D --> D1[Research Centers]
    D --> D2[Publications]
    D --> D3[Research Projects]
    D --> D4[Collaborations]
    D --> D5[Innovation Hub]

    E --> E1[Student Life]
    E --> E2[Clubs & Organizations]
    E --> E3[Sports & Recreation]
    E --> E4[Campus Facilities]
    E --> E5[Student Services]

    F --> F1[History & Mission]
    F --> F2[Leadership]
    F --> F3[Rankings & Recognition]
    F --> F4[Campus & Locations]
    F --> F5[Contact Information]

    G --> G1[Latest News]
    G --> G2[Events Calendar]
    G --> G3[Announcements]
    G --> G4[Media Gallery]
    G --> G5[Press Releases]
```

## Diagram 4: Content Management Workflow

```mermaid
graph LR
    A[Content Creator] --> B[Draft Content]
    B --> C{Content Review}
    C -->|Approved| D[Publish Content]
    C -->|Needs Revision| E[Revise Content]
    E --> C
    D --> F[Live Website]
    F --> G[Analytics Tracking]
    G --> H[Performance Review]
    H --> I{Update Needed?}
    I -->|Yes| J[Schedule Update]
    I -->|No| K[Archive Content]
    J --> B
    
    subgraph "Approval Workflow"
        L[Department Head]
        M[Communications Team]
        N[IT Admin]
    end
    
    C --> L
    L --> M
    M --> N
    N --> D
```

---

**Instructions for MS Word Integration:**

1. Copy the Mermaid code from each diagram section
2. Use an online Mermaid editor (like mermaid.live) to generate PNG/SVG images
3. Insert the generated images into your MS Word document
4. Add appropriate captions and references to each diagram
5. Ensure diagrams are sized appropriately for document layout

**Alternative Method:**
- Use Mermaid plugins available for MS Word
- Or convert diagrams to Visio format for better integration with Office suite

*Diagram Source File*  
*Version: 1.0*  
*Date: July 19, 2025*  
*Project: UAP Website Redesign*
