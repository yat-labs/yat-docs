---
id: register
slug: /register
title: Creating a new user
---

:::caution
The integration libraries and documentation for Yat are still in _Alpha_. They are not yet feature complete, and there are likely bugs in the implementation.
:::

## Overview

There are 2 paths we can use for integration, with the user-centric path being more “privacy” focused, and the
organization-centric path being more centralized.

In the user-centric approach, each user will register independently and we will return access / refresh tokens to the
calling app which can be used independently to update the users’ Yats.

In the organization-centric approach, the user will be tied to an organization, giving the organization certain control
over their Yats. This would require a centralized server that would route all requests on behalf of the user.

# Signing up a new user

To create a new account at y.at, register a user with a `POST` query to the
[`/users`](api_reference/index#users) end-point.

The only mandatory field for registration is an email address, but the user's name and last name can be provided as
well.

The password field is optional. If it is provided, the user account will be created with the given password, and the
user will be able to log in using conventional username-password semantics.

But there's also the option of omitting the password field completely, in which case y.at will grant user access via
[magic links](#magic-links).

Users have the ability to register with an email address and password.

### Magic links

What the heck are magic links? I'm glad you asked.

A user only requires an email address for registration. An introductory email is sent which includes a “magic link”. The
calling app can register an intent / universal link for the Yat domain and extract the `refresh_token` query parameter.
This refresh token expires and is used to generate an access and longer lived refresh token that can be used to interact
with the API.
