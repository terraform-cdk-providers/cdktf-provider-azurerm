// https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_facebook.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementIdentityProviderFacebookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_facebook.html#api_management_name ApiManagementIdentityProviderFacebook#api_management_name}
  */
  readonly apiManagementName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_facebook.html#app_id ApiManagementIdentityProviderFacebook#app_id}
  */
  readonly appId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_facebook.html#app_secret ApiManagementIdentityProviderFacebook#app_secret}
  */
  readonly appSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_facebook.html#resource_group_name ApiManagementIdentityProviderFacebook#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_facebook.html#timeouts ApiManagementIdentityProviderFacebook#timeouts}
  */
  readonly timeouts?: ApiManagementIdentityProviderFacebookTimeouts;
}
export interface ApiManagementIdentityProviderFacebookTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_facebook.html#create ApiManagementIdentityProviderFacebook#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_facebook.html#delete ApiManagementIdentityProviderFacebook#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_facebook.html#read ApiManagementIdentityProviderFacebook#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_facebook.html#update ApiManagementIdentityProviderFacebook#update}
  */
  readonly update?: string;
}

function apiManagementIdentityProviderFacebookTimeoutsToTerraform(struct?: ApiManagementIdentityProviderFacebookTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_facebook.html azurerm_api_management_identity_provider_facebook}
*/
export class ApiManagementIdentityProviderFacebook extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_facebook.html azurerm_api_management_identity_provider_facebook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiManagementIdentityProviderFacebookConfig
  */
  public constructor(scope: Construct, id: string, config: ApiManagementIdentityProviderFacebookConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_identity_provider_facebook',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiManagementName = config.apiManagementName;
    this._appId = config.appId;
    this._appSecret = config.appSecret;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_management_name - computed: false, optional: false, required: true
  private _apiManagementName: string;
  public get apiManagementName() {
    return this.getStringAttribute('api_management_name');
  }
  public set apiManagementName(value: string) {
    this._apiManagementName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiManagementNameInput() {
    return this._apiManagementName
  }

  // app_id - computed: false, optional: false, required: true
  private _appId: string;
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId
  }

  // app_secret - computed: false, optional: false, required: true
  private _appSecret: string;
  public get appSecret() {
    return this.getStringAttribute('app_secret');
  }
  public set appSecret(value: string) {
    this._appSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appSecretInput() {
    return this._appSecret
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementIdentityProviderFacebookTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ApiManagementIdentityProviderFacebookTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_management_name: cdktf.stringToTerraform(this._apiManagementName),
      app_id: cdktf.stringToTerraform(this._appId),
      app_secret: cdktf.stringToTerraform(this._appSecret),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: apiManagementIdentityProviderFacebookTimeoutsToTerraform(this._timeouts),
    };
  }
}
