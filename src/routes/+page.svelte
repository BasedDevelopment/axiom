<script lang="ts">
  import { goto } from '$app/navigation';
  import type { Error, LoginResponse } from '$lib/data';
  import cookie from 'cookie';

  // doAuthentication sends a HTTP request to the Eve instance to authenticate the user and returns an authentication token for later requests
  async function doAuthentication(email: string, password: string): Promise<string> {
    // @todo Make this URL dynamic
    const resp = await fetch('http://localhost:3000/login', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (resp.ok) {
      const json: LoginResponse = await resp.json();
      return json.token;
    } else {
      const json: Error = await resp.json();
      throw new Error(`${json.request} - ${json.message}`);
    }
  }

  // setCookie uses a token string from doAuthentication and adds it to the document's cookies
  function setCookie(token: string) {
    const date = new Date();
    date.setDate(date.getDate() + 1);

    document.cookie = cookie.serialize('token', token, {
      expires: date,
      secure: true,
      sameSite: 'strict',
    });
  }

  // handleLogin parses the form event and sends the email and password to doAuthentication, then setCookie
  async function handleLogin(e: Event & { currentTarget: EventTarget & HTMLFormElement }) {
    const form = e.target as HTMLFormElement;
    const { email, password } = {
      email: form[0] as HTMLInputElement,
      password: form[1] as HTMLInputElement,
    };

    try {
      const token = await doAuthentication(email.value, password.value);
      setCookie(token);
      await goto('/me');
    } catch (e) {
      console.error(e);
    }
  }
</script>

<div class="w-full p-5 dark:bg-slate-900 dark:text-white">
  <div style={'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);'}>
    <form class="w-full max-w-sm" on:submit|preventDefault={handleLogin} action="#">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="email">
            Email
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-gray-100 focus:border-purple-500"
            id="email"
            type="email"
            placeholder="john.public@usa.gov"
            required
          />
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="password"
          >
            Password
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-gray-100 focus:border-purple-500"
            id="password"
            type="password"
            autocomplete="current-password"
            placeholder="******************"
            required
          />
        </div>
      </div>
      <div class="md:flex">
        <div class="md:w-2/3 gap-2">
          <input
            class="shadow bg-indigo-600 hover:bg-indigo-500 hover:cursor-pointer focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
            value="Log In"
          />
        </div>
      </div>
    </form>
  </div>
</div>
