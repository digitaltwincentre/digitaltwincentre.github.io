---
layout: default
title: Biweekly 29
date: 24 November 2020, 1400 CEST
---

<script src="https://code.jquery.com/jquery-1.11.1.min.js">
</script>
<script src="/javascripts/edit.js"></script>
<script>setEditButonNm();</script>

# {{ page.title }}

|      |                              |
| ---- | ---------------------------- |
| Date | 24 November 2020, 14:00 CEST |

## Pre-meeting stakeholders' reports

<!-- Please keep in mind that the minutes are publicly available.-->

#### Peter Gorm Larsen

- Made opening presentation for the webinar on the 25th of November
- Polished a bit on various Overture papers
- Met with Technicon regarding their MADE FAST part project with Daniella
- Met with Novo regarding their MADE FAST project with Fatemeh
- Discussed equipment for Ringkjøbing-Skjern with Emil
- Working on presentations for kick-off meeting with Ringkjøbing Skjern
- Preparing digital twin presentation for MADE innovation event

#### Claudio Gomes

- Met with Novo and Technicon (with Peter, Fateme, and Daniella)
- Advances on the background section on M&S for ML Survey (with Christian)
- Planned roadmap for digital twinning of incubator case study (with Hao, Till, Casper)
- Draft of scenario verification tool (with Simon, Maurizio, Casper)
- Met with digit brain stakeholders to discuss basics of FMI (with Prasad)

#### Nick Battle

- Continue LSP Combinatorial Testing implementation with Jonas and Frederik
- Add error numbers to VDMCheck static semantic model for Maestro integration
- Fix some VDMJ/Overture problems (via Leo)
- Look at CT examples for PGL - Luhn model proposed and working on Basket Service model
- Fixed a memory leak in VDMJ for CT
- Made 4.4.0 release of VDMJ for Maestro, bumping to 4.4.1-SNAPSHOT

#### CAsper Thule

- Typechecker for Maestro2
- Multi-dimensional arrays for Maestro2
- Maestro2 presentation
- Working with Claudio, Simon, Maurizio on UPPAAL model
- Interested in verifying MaBL scenario and FMU employment via UPPAAL model - how do we verify all traces of a MaBL program? Control flow graph?
- Supporting Gita with fault-injection.

#### Christian Møldrup Legaard

- won't be at meeting today
- Implemented a generic solution for implementing FMUs in **ANY** language.
- Based on the lessons learned from PyFMU.
- Advantages:
  - Language agnostic
  - Remote deployment possible (just ssh into remote and launch)
  - Standalone, easy to bundle runtime in FMU
  - Precompiled binaries. No need to install compiler toolchain, cross-platform support out of box

```toml
[command]
windows = [ "python", "launch.py" ]
linux = [ "python3", "launch.py" ]
macos = ["python3","launch.py"]
```

- GUI + CLI for creating and modifying FMUs

![](assets/2020-11-24-11-57-57.png)

- [UniFMU repostiory](https://github.com/INTO-CPS-Association/unifmu)

- Intrested in:

  - "Java and friends" backend
    ![](assets/2020-11-24-12-06-59.png)

- Working on DL+M&S survey (with Claudio)

## Sub-projects status

#### Sub-project X

#### Sub-project Y

#### Sub-project Z

## Any Other Business

## Next Meeting

08 December 2020, 14:00 CEST

<div id="edit_page_div"></div>
