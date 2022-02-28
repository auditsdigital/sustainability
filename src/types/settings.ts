import {
  BrowserConnectOptions,
  BrowserLaunchArgumentOptions,
  LaunchOptions,
  Product,
} from "puppeteer";
import { Readable } from "stream";
import Audit from "../audits/audit";
import Collect from "../collect/collect";

export interface DefaultSettings {
  LAUNCH_SETTINGS: LaunchPuppeteerOptions;
  CONNECTION_SETTINGS: PrivateSettings;
  CATEGORIES: {
    server: { description: string };
    design: { description: string };
  };
  AUDITS: CollectorAndAudit;
  REPORT: {
    scoring: Scoring;
    format?: string;
    webhook?: string;
  };
}

export interface CollectorAndAudit {
  collectors: Array<typeof Collect>;
  audits: Array<typeof Audit>;
}

export interface ConnectionSettings {
  /**
   * Navigation timeout. Defaults to 30000 ms
   */
  maxNavigationTime?: number;
  /**
   * Page srolling timeout. Defaults to 30 ms
   */
  maxScrollInterval?: number;
  /**
	 * Emulated device defaults to: 
	 * name: 'Desktop 1920x1080',
			userAgent:
				'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.75 Safari/537.36',
			viewport: {
				width: 1920,
				height: 1080
			}
	 */

  emulatedDevice?: EmulatedDevice;
  /**
	 * Emulated location defaults to: 	
	 * name: 'Seattle',
			latitude: 47.6062,
			longitude: -122.3331,
			accuracy: 100
	 */
  location?: EmulatedLocation;
  /**
   * Should initialise a cold run to find any potential URL redirect. Defaults to true
   */
  coldRun?: boolean;

  /**
   * Should push individual audits results as they go. Defaults to false
   */
  streams?: boolean;
  /**
   * A readable stream of audits to pipe from. Used in combination with streams option.
   */
  pipe?: Readable;

  /**
   * Terminate readable stream once audit has finished. Defaults to false
   */
  pipeTerminateOnEnd?: boolean;
}

export interface PrivateSettings {
  maxNavigationTime: number;
  maxScrollInterval: number;
  maxScrollWaitingTime: number;
  emulatedDevice: EmulatedDevice;
  location: EmulatedLocation;
  maxThrottle: number;
  streams: boolean;
  pipe?: Readable;
  pipeTerminateOnEnd?: boolean;
  coldRun: boolean;
}

export interface Scoring {
  [key: string]: {
    median: number;
    p10: number;
    name: string;
  };
}
export interface EmulatedDevice {
  name?: string;
  userAgent: string;
  viewport: Viewport;
}

interface EmulatedLocation {
  name?: string;
  latitude: number;
  longitude: number;
  accuracy: number;
}

interface Viewport {
  width: number;
  height: number;
}

export type LaunchPuppeteerOptions = LaunchOptions &
  BrowserLaunchArgumentOptions &
  BrowserConnectOptions & {
    product?: Product;
    extraPrefsFirefox?: Record<string, unknown>;
  };
