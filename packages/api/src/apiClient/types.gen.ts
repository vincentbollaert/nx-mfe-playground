// This file is auto-generated by @hey-api/openapi-ts

export type Feature = {
  /**
   * Auto-generated ID for the feature
   */
  id: string;
  /**
   * Name of the feature
   */
  name: string;
  /**
   * Description of the feature
   */
  description: string;
  /**
   * Status of the feature 'not started' | 'in progress' | 'done'
   */
  status: string;
};

export type GetFeaturesData = {
  body?: never;
  path?: never;
  query?: never;
  url: "/features";
};

export type GetFeaturesResponses = {
  /**
   * Features
   */
  200: {
    features?: Array<Feature>;
  };
};

export type GetFeaturesResponse = GetFeaturesResponses[keyof GetFeaturesResponses];

export type ClientOptions = {
  baseUrl: `${string}://${string}/api/v1` | (string & {});
};
