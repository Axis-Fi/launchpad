/* tslint:disable */
/* eslint-disable */
/**
 * Axis Points Server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from "../runtime";
/**
 * A JSON object containing information about a launch.
 * @export
 * @interface Launch
 */
export interface Launch {
  /**
   *
   * @type {string}
   * @memberof Launch
   */
  name?: string;
  /**
   *
   * @type {number}
   * @memberof Launch
   */
  chainId?: number;
  /**
   *
   * @type {Date}
   * @memberof Launch
   */
  deadline?: Date;
  /**
   *
   * @type {string}
   * @memberof Launch
   */
  imageUrl?: string;
  /**
   *
   * @type {string}
   * @memberof Launch
   */
  description?: string;
  /**
   *
   * @type {string}
   * @memberof Launch
   */
  quoteToken?: string;
  /**
   *
   * @type {number}
   * @memberof Launch
   */
  valuation?: number;
}

/**
 * Check if a given object implements the Launch interface.
 */
export function instanceOfLaunch(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function LaunchFromJSON(json: any): Launch {
  return LaunchFromJSONTyped(json, false);
}

export function LaunchFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Launch {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: !exists(json, "name") ? undefined : json["name"],
    chainId: !exists(json, "chain_id") ? undefined : json["chain_id"],
    deadline: !exists(json, "deadline")
      ? undefined
      : new Date(json["deadline"]),
    imageUrl: !exists(json, "image_url") ? undefined : json["image_url"],
    description: !exists(json, "description") ? undefined : json["description"],
    quoteToken: !exists(json, "quote_token") ? undefined : json["quote_token"],
    valuation: !exists(json, "valuation") ? undefined : json["valuation"],
  };
}

export function LaunchToJSON(value?: Launch | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name,
    chain_id: value.chainId,
    deadline:
      value.deadline === undefined ? undefined : value.deadline.toISOString(),
    image_url: value.imageUrl,
    description: value.description,
    quote_token: value.quoteToken,
    valuation: value.valuation,
  };
}
