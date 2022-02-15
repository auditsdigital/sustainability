import { Meta, Result } from '../types/audit';
import { Traces } from '../types/traces';
import * as util from '../utils/utils';
import Audit from './audit';

export default class UsesDarkModeAudit extends Audit {
	static get meta() {
		return {
			id: 'darkmode',
			title: `Dark mode is available`,
			failureTitle: `Dark mode is unavailable`,
			description: `Having a dark theme or dark mode available in your website can significally decrease the power consumption in OLED displays. You should use it along with the prefers-colors-scheme CSS media feature to detect if the user has requested the system use a light or dark color theme`,
			category: 'design',
			collectors: ['screenshotcollect']
		} as Meta;
	}

	/**
	 * @workflow
	 * 	Two screenshots are taken: one with default light mode and a second with system-level dark mode preference.
	 *  If they match (string comparaisson) dark mode is unavailable and so the audit fails.
	 *
	 */
	static async audit(traces: Traces): Promise<Result> {
		const debug = util.debugGenerator('UsesDarkMode Audit');
		debug('running');
		const score = Number(traces.screenshot.hasDarkMode);
		const meta = util.successOrFailureMeta(UsesDarkModeAudit.meta, score);
		debug('done');

		return {
			meta,
			score,
			scoreDisplayMode: 'binary'
		};
	}
}
