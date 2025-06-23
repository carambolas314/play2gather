export type Result<Ok, Err> =
	| { ok: true; value: Ok }
	| { ok: false; error: Err };
