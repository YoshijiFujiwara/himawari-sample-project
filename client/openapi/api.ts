/* tslint:disable */
/* eslint-disable */
/**
 * ひまわりプロジェクト
 * APIドキュメント
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as globalImportUrl from 'url';
import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface AccessTokenSerializer
 */
export interface AccessTokenSerializer {
    /**
     * 
     * @type {string}
     * @memberof AccessTokenSerializer
     */
    accessToken: string;
}
/**
 * 
 * @export
 * @interface CreateTaskDto
 */
export interface CreateTaskDto {
    /**
     * 
     * @type {string}
     * @memberof CreateTaskDto
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof CreateTaskDto
     */
    description: string;
}
/**
 * 
 * @export
 * @interface SignInUserDto
 */
export interface SignInUserDto {
    /**
     * 
     * @type {string}
     * @memberof SignInUserDto
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof SignInUserDto
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof SignInUserDto
     */
    password: string;
}
/**
 * 
 * @export
 * @interface SignUpUserDto
 */
export interface SignUpUserDto {
    /**
     * 
     * @type {string}
     * @memberof SignUpUserDto
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof SignUpUserDto
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof SignUpUserDto
     */
    password: string;
}
/**
 * 
 * @export
 * @interface TaskSerializer
 */
export interface TaskSerializer {
    /**
     * 
     * @type {number}
     * @memberof TaskSerializer
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof TaskSerializer
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof TaskSerializer
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof TaskSerializer
     */
    status: string;
}

/**
 * AuthApi - axios parameter creator
 * @export
 */
export const AuthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerGoogleLogin: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/auth/google`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerGoogleLoginCallback: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/auth/google/callback`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerMe: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/auth/me`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {SignInUserDto} signInUserDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerSignIn: async (signInUserDto: SignInUserDto, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'signInUserDto' is not null or undefined
            if (signInUserDto === null || signInUserDto === undefined) {
                throw new RequiredError('signInUserDto','Required parameter signInUserDto was null or undefined when calling authControllerSignIn.');
            }
            const localVarPath = `/api/auth/signin`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof signInUserDto !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(signInUserDto !== undefined ? signInUserDto : {}) : (signInUserDto || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {SignUpUserDto} signUpUserDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerSignUp: async (signUpUserDto: SignUpUserDto, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'signUpUserDto' is not null or undefined
            if (signUpUserDto === null || signUpUserDto === undefined) {
                throw new RequiredError('signUpUserDto','Required parameter signUpUserDto was null or undefined when calling authControllerSignUp.');
            }
            const localVarPath = `/api/auth/signup`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof signUpUserDto !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(signUpUserDto !== undefined ? signUpUserDto : {}) : (signUpUserDto || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} token 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerVerifyEmail: async (token: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'token' is not null or undefined
            if (token === null || token === undefined) {
                throw new RequiredError('token','Required parameter token was null or undefined when calling authControllerVerifyEmail.');
            }
            const localVarPath = `/api/auth/email/verify/{token}`
                .replace(`{${"token"}}`, encodeURIComponent(String(token)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authControllerGoogleLogin(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await AuthApiAxiosParamCreator(configuration).authControllerGoogleLogin(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authControllerGoogleLoginCallback(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await AuthApiAxiosParamCreator(configuration).authControllerGoogleLoginCallback(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authControllerMe(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await AuthApiAxiosParamCreator(configuration).authControllerMe(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {SignInUserDto} signInUserDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authControllerSignIn(signInUserDto: SignInUserDto, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AccessTokenSerializer>> {
            const localVarAxiosArgs = await AuthApiAxiosParamCreator(configuration).authControllerSignIn(signInUserDto, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {SignUpUserDto} signUpUserDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authControllerSignUp(signUpUserDto: SignUpUserDto, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await AuthApiAxiosParamCreator(configuration).authControllerSignUp(signUpUserDto, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} token 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authControllerVerifyEmail(token: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await AuthApiAxiosParamCreator(configuration).authControllerVerifyEmail(token, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerGoogleLogin(options?: any): AxiosPromise<void> {
            return AuthApiFp(configuration).authControllerGoogleLogin(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerGoogleLoginCallback(options?: any): AxiosPromise<void> {
            return AuthApiFp(configuration).authControllerGoogleLoginCallback(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerMe(options?: any): AxiosPromise<void> {
            return AuthApiFp(configuration).authControllerMe(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {SignInUserDto} signInUserDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerSignIn(signInUserDto: SignInUserDto, options?: any): AxiosPromise<AccessTokenSerializer> {
            return AuthApiFp(configuration).authControllerSignIn(signInUserDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {SignUpUserDto} signUpUserDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerSignUp(signUpUserDto: SignUpUserDto, options?: any): AxiosPromise<void> {
            return AuthApiFp(configuration).authControllerSignUp(signUpUserDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} token 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerVerifyEmail(token: string, options?: any): AxiosPromise<void> {
            return AuthApiFp(configuration).authControllerVerifyEmail(token, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export class AuthApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authControllerGoogleLogin(options?: any) {
        return AuthApiFp(this.configuration).authControllerGoogleLogin(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authControllerGoogleLoginCallback(options?: any) {
        return AuthApiFp(this.configuration).authControllerGoogleLoginCallback(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authControllerMe(options?: any) {
        return AuthApiFp(this.configuration).authControllerMe(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {SignInUserDto} signInUserDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authControllerSignIn(signInUserDto: SignInUserDto, options?: any) {
        return AuthApiFp(this.configuration).authControllerSignIn(signInUserDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {SignUpUserDto} signUpUserDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authControllerSignUp(signUpUserDto: SignUpUserDto, options?: any) {
        return AuthApiFp(this.configuration).authControllerSignUp(signUpUserDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} token 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authControllerVerifyEmail(token: string, options?: any) {
        return AuthApiFp(this.configuration).authControllerVerifyEmail(token, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * TasksApi - axios parameter creator
 * @export
 */
export const TasksApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {CreateTaskDto} createTaskDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tasksControllerCreateTask: async (createTaskDto: CreateTaskDto, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'createTaskDto' is not null or undefined
            if (createTaskDto === null || createTaskDto === undefined) {
                throw new RequiredError('createTaskDto','Required parameter createTaskDto was null or undefined when calling tasksControllerCreateTask.');
            }
            const localVarPath = `/api/tasks`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof createTaskDto !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(createTaskDto !== undefined ? createTaskDto : {}) : (createTaskDto || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tasksControllerDeleteTask: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling tasksControllerDeleteTask.');
            }
            const localVarPath = `/api/tasks/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tasksControllerGetTaskById: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling tasksControllerGetTaskById.');
            }
            const localVarPath = `/api/tasks/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tasksControllerGetTasks: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/tasks`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tasksControllerUpdateTaskStatus: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling tasksControllerUpdateTaskStatus.');
            }
            const localVarPath = `/api/tasks/{id}/status`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TasksApi - functional programming interface
 * @export
 */
export const TasksApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {CreateTaskDto} createTaskDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tasksControllerCreateTask(createTaskDto: CreateTaskDto, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskSerializer>> {
            const localVarAxiosArgs = await TasksApiAxiosParamCreator(configuration).tasksControllerCreateTask(createTaskDto, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tasksControllerDeleteTask(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await TasksApiAxiosParamCreator(configuration).tasksControllerDeleteTask(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tasksControllerGetTaskById(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskSerializer>> {
            const localVarAxiosArgs = await TasksApiAxiosParamCreator(configuration).tasksControllerGetTaskById(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tasksControllerGetTasks(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TaskSerializer>>> {
            const localVarAxiosArgs = await TasksApiAxiosParamCreator(configuration).tasksControllerGetTasks(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tasksControllerUpdateTaskStatus(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskSerializer>> {
            const localVarAxiosArgs = await TasksApiAxiosParamCreator(configuration).tasksControllerUpdateTaskStatus(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * TasksApi - factory interface
 * @export
 */
export const TasksApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {CreateTaskDto} createTaskDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tasksControllerCreateTask(createTaskDto: CreateTaskDto, options?: any): AxiosPromise<TaskSerializer> {
            return TasksApiFp(configuration).tasksControllerCreateTask(createTaskDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tasksControllerDeleteTask(id: number, options?: any): AxiosPromise<void> {
            return TasksApiFp(configuration).tasksControllerDeleteTask(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tasksControllerGetTaskById(id: number, options?: any): AxiosPromise<TaskSerializer> {
            return TasksApiFp(configuration).tasksControllerGetTaskById(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tasksControllerGetTasks(options?: any): AxiosPromise<Array<TaskSerializer>> {
            return TasksApiFp(configuration).tasksControllerGetTasks(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tasksControllerUpdateTaskStatus(id: number, options?: any): AxiosPromise<TaskSerializer> {
            return TasksApiFp(configuration).tasksControllerUpdateTaskStatus(id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TasksApi - object-oriented interface
 * @export
 * @class TasksApi
 * @extends {BaseAPI}
 */
export class TasksApi extends BaseAPI {
    /**
     * 
     * @param {CreateTaskDto} createTaskDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TasksApi
     */
    public tasksControllerCreateTask(createTaskDto: CreateTaskDto, options?: any) {
        return TasksApiFp(this.configuration).tasksControllerCreateTask(createTaskDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TasksApi
     */
    public tasksControllerDeleteTask(id: number, options?: any) {
        return TasksApiFp(this.configuration).tasksControllerDeleteTask(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TasksApi
     */
    public tasksControllerGetTaskById(id: number, options?: any) {
        return TasksApiFp(this.configuration).tasksControllerGetTaskById(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TasksApi
     */
    public tasksControllerGetTasks(options?: any) {
        return TasksApiFp(this.configuration).tasksControllerGetTasks(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TasksApi
     */
    public tasksControllerUpdateTaskStatus(id: number, options?: any) {
        return TasksApiFp(this.configuration).tasksControllerUpdateTaskStatus(id, options).then((request) => request(this.axios, this.basePath));
    }
}


