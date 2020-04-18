---
title: Post-Setup Steps
layout: default
---

## Post-Setup Steps

Theoretically you can use LinkAce after finishing the setup. I recommend checking the following short steps to make
sure you unlock the full potential of LinkAce.  
All following steps are described in detail in the [Configuration](/docs/v1/configuration/) section.

### 1. Update the .env file with advanced settings

The `.env` file in your LinkAce directory contains some advanced settings that should be enabled.

* **Automated backups**  
    To enable automated backups (including all files and the database), go to the `Backup configuration` section and 
    fill all needed variables. By default AWS is set as the backup location but you can also choose the backups to
    be stored locally.
* **Email configuration**  
    To be able to send emails from LinkAce, e.g. for password resets, link check notifications or backup notifications,
    you have to configure LinkAce with working credentials. Go to the `Mail configuration` section in the .env file
    and fill all needed variables.

### 2. Setup the cron

The cron is necessary to enable automated backups via the Waybackmachine, enabling regular link checks and app
backups. You will be presented a cron token and a pre-built cron URL on the system settings page, available also from the
username dropdown. More information about how to configure a cron can be found in the [System Settings](/docs/v1/configuration/system-settings).

### 3. Configure basic app settings

On the same page as your Bookmarklet you can find basic app settings like the timezone, date and time format and some
privacy defaults. I recommend setting the correct timezone and the date and time formats too. You may also set which
share buttons should be available when viewing your links.

### 4. Install the Bookmarklet

Visit the user settings, available from the dropdown menu beneath your username. To install the bookmarklet, simply
drag the Bookmarklet button into your bookmarks bar.
