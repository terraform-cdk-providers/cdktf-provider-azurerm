// https://www.terraform.io/docs/providers/azurerm/r/portal_tenant_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortalTenantConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/portal_tenant_configuration.html#private_markdown_storage_enforced PortalTenantConfiguration#private_markdown_storage_enforced}
  */
  readonly privateMarkdownStorageEnforced: boolean;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/portal_tenant_configuration.html#timeouts PortalTenantConfiguration#timeouts}
  */
  readonly timeouts?: PortalTenantConfigurationTimeouts;
}
export interface PortalTenantConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/portal_tenant_configuration.html#create PortalTenantConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/portal_tenant_configuration.html#delete PortalTenantConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/portal_tenant_configuration.html#read PortalTenantConfiguration#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/portal_tenant_configuration.html#update PortalTenantConfiguration#update}
  */
  readonly update?: string;
}

function portalTenantConfigurationTimeoutsToTerraform(struct?: PortalTenantConfigurationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/portal_tenant_configuration.html azurerm_portal_tenant_configuration}
*/
export class PortalTenantConfiguration extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/portal_tenant_configuration.html azurerm_portal_tenant_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortalTenantConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: PortalTenantConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_portal_tenant_configuration',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._privateMarkdownStorageEnforced = config.privateMarkdownStorageEnforced;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // private_markdown_storage_enforced - computed: false, optional: false, required: true
  private _privateMarkdownStorageEnforced: boolean;
  public get privateMarkdownStorageEnforced() {
    return this.getBooleanAttribute('private_markdown_storage_enforced');
  }
  public set privateMarkdownStorageEnforced(value: boolean) {
    this._privateMarkdownStorageEnforced = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateMarkdownStorageEnforcedInput() {
    return this._privateMarkdownStorageEnforced
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PortalTenantConfigurationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: PortalTenantConfigurationTimeouts ) {
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
      private_markdown_storage_enforced: cdktf.booleanToTerraform(this._privateMarkdownStorageEnforced),
      timeouts: portalTenantConfigurationTimeoutsToTerraform(this._timeouts),
    };
  }
}
