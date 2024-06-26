import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		testTimeout: 120_000,
		poolOptions: {
			threads: {
				singleThread: true,
			},
		},
		retry: 2,
		include: ["e2e/**/*.test.ts"],
		// eslint-disable-next-line turbo/no-undeclared-env-vars
		outputFile: process.env.TEST_REPORT_PATH ?? ".e2e-test-report/index.html",
		globalSetup: path.resolve(__dirname, "./validate-environment.ts"),
		reporters: ["verbose", "html"],
	},
});
