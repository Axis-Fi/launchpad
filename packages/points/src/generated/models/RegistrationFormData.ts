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
 *
 * @export
 * @interface RegistrationFormData
 */
export interface RegistrationFormData {
  /**
   *
   * @type {string}
   * @memberof RegistrationFormData
   */
  message?: string;
  /**
   *
   * @type {string}
   * @memberof RegistrationFormData
   */
  signature?: string;
  /**
   *
   * @type {string}
   * @memberof RegistrationFormData
   */
  username?: string;
  /**
   *
   * @type {string}
   * @memberof RegistrationFormData
   */
  referrer?: string;
}

/**
 * Check if a given object implements the RegistrationFormData interface.
 */
export function instanceOfRegistrationFormData(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function RegistrationFormDataFromJSON(json: any): RegistrationFormData {
  return RegistrationFormDataFromJSONTyped(json, false);
}

export function RegistrationFormDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): RegistrationFormData {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    message: !exists(json, "message") ? undefined : json["message"],
    signature: !exists(json, "signature") ? undefined : json["signature"],
    username: !exists(json, "username") ? undefined : json["username"],
    referrer: !exists(json, "referrer") ? undefined : json["referrer"],
  };
}

export function RegistrationFormDataToJSON(
  value?: RegistrationFormData | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    message: value.message,
    signature: value.signature,
    username: value.username,
    referrer: value.referrer,
  };
}
