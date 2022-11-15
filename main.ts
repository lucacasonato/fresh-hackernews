/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

import { options } from "preact";

options.debounceRendering = Promise.prototype.then.bind(Promise.resolve());

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
await start(manifest, { port: 7003 });
