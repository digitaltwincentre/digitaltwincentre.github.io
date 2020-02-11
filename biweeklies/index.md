---
layout: default
title: Digital Twin Centre Biweeklies
---

# {{ page.title }}

This is a placeholder for the DTC biweekly net meetings. Please keep in mind that **the minutes are publicly available**. 

## Upcoming meetings:

{% for nm in site.biweeklies %}
{% assign today = 'now' | date: '%Y%m%d' %}
{% assign mdate = nm.date | date: '%Y%m%d' %}
{% if mdate >= today %}
* [{{ nm.title }}]({{ site.url }}{{ nm.url }}): {{ nm.date | date: '%B %d, %Y' }}
{% endif %}
{% endfor %}


And we have a [meeting template](template.html)


## Past Meetings

{% for nm in site.biweeklies reversed %}
{% assign today = 'now' | date: '%Y%m%d' %}
{% assign mdate = nm.date | date: '%Y%m%d' %}
{% if mdate < today %}
* [{{ nm.title }}]({{ site.url }}{{ nm.url }}): {{ nm.date | date: '%B %d, %Y' }}
{% endif %}
{% endfor %}

