// https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabricksWorkspaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#customer_managed_key_enabled DatabricksWorkspace#customer_managed_key_enabled}
  */
  readonly customerManagedKeyEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#infrastructure_encryption_enabled DatabricksWorkspace#infrastructure_encryption_enabled}
  */
  readonly infrastructureEncryptionEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#location DatabricksWorkspace#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#managed_resource_group_name DatabricksWorkspace#managed_resource_group_name}
  */
  readonly managedResourceGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#name DatabricksWorkspace#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#resource_group_name DatabricksWorkspace#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#sku DatabricksWorkspace#sku}
  */
  readonly sku: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#tags DatabricksWorkspace#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * custom_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#custom_parameters DatabricksWorkspace#custom_parameters}
  */
  readonly customParameters?: DatabricksWorkspaceCustomParameters[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#timeouts DatabricksWorkspace#timeouts}
  */
  readonly timeouts?: DatabricksWorkspaceTimeouts;
}
export class DatabricksWorkspaceStorageAccountIdentity extends cdktf.ComplexComputedList {

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DatabricksWorkspaceCustomParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#machine_learning_workspace_id DatabricksWorkspace#machine_learning_workspace_id}
  */
  readonly machineLearningWorkspaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#no_public_ip DatabricksWorkspace#no_public_ip}
  */
  readonly noPublicIp?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#private_subnet_name DatabricksWorkspace#private_subnet_name}
  */
  readonly privateSubnetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#public_subnet_name DatabricksWorkspace#public_subnet_name}
  */
  readonly publicSubnetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#virtual_network_id DatabricksWorkspace#virtual_network_id}
  */
  readonly virtualNetworkId?: string;
}

function databricksWorkspaceCustomParametersToTerraform(struct?: DatabricksWorkspaceCustomParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    machine_learning_workspace_id: cdktf.stringToTerraform(struct!.machineLearningWorkspaceId),
    no_public_ip: cdktf.booleanToTerraform(struct!.noPublicIp),
    private_subnet_name: cdktf.stringToTerraform(struct!.privateSubnetName),
    public_subnet_name: cdktf.stringToTerraform(struct!.publicSubnetName),
    virtual_network_id: cdktf.stringToTerraform(struct!.virtualNetworkId),
  }
}

export interface DatabricksWorkspaceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#create DatabricksWorkspace#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#delete DatabricksWorkspace#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#read DatabricksWorkspace#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html#update DatabricksWorkspace#update}
  */
  readonly update?: string;
}

function databricksWorkspaceTimeoutsToTerraform(struct?: DatabricksWorkspaceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html azurerm_databricks_workspace}
*/
export class DatabricksWorkspace extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/databricks_workspace.html azurerm_databricks_workspace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabricksWorkspaceConfig
  */
  public constructor(scope: Construct, id: string, config: DatabricksWorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_databricks_workspace',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._customerManagedKeyEnabled = config.customerManagedKeyEnabled;
    this._infrastructureEncryptionEnabled = config.infrastructureEncryptionEnabled;
    this._location = config.location;
    this._managedResourceGroupName = config.managedResourceGroupName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._sku = config.sku;
    this._tags = config.tags;
    this._customParameters = config.customParameters;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // customer_managed_key_enabled - computed: false, optional: true, required: false
  private _customerManagedKeyEnabled?: boolean;
  public get customerManagedKeyEnabled() {
    return this.getBooleanAttribute('customer_managed_key_enabled');
  }
  public set customerManagedKeyEnabled(value: boolean ) {
    this._customerManagedKeyEnabled = value;
  }
  public resetCustomerManagedKeyEnabled() {
    this._customerManagedKeyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedKeyEnabledInput() {
    return this._customerManagedKeyEnabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // infrastructure_encryption_enabled - computed: false, optional: true, required: false
  private _infrastructureEncryptionEnabled?: boolean;
  public get infrastructureEncryptionEnabled() {
    return this.getBooleanAttribute('infrastructure_encryption_enabled');
  }
  public set infrastructureEncryptionEnabled(value: boolean ) {
    this._infrastructureEncryptionEnabled = value;
  }
  public resetInfrastructureEncryptionEnabled() {
    this._infrastructureEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureEncryptionEnabledInput() {
    return this._infrastructureEncryptionEnabled
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // managed_resource_group_id - computed: true, optional: false, required: false
  public get managedResourceGroupId() {
    return this.getStringAttribute('managed_resource_group_id');
  }

  // managed_resource_group_name - computed: true, optional: true, required: false
  private _managedResourceGroupName?: string;
  public get managedResourceGroupName() {
    return this.getStringAttribute('managed_resource_group_name');
  }
  public set managedResourceGroupName(value: string) {
    this._managedResourceGroupName = value;
  }
  public resetManagedResourceGroupName() {
    this._managedResourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedResourceGroupNameInput() {
    return this._managedResourceGroupName
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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

  // sku - computed: false, optional: false, required: true
  private _sku: string;
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku
  }

  // storage_account_identity - computed: true, optional: false, required: false
  public storageAccountIdentity(index: string) {
    return new DatabricksWorkspaceStorageAccountIdentity(this, 'storage_account_identity', index);
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }

  // workspace_url - computed: true, optional: false, required: false
  public get workspaceUrl() {
    return this.getStringAttribute('workspace_url');
  }

  // custom_parameters - computed: false, optional: true, required: false
  private _customParameters?: DatabricksWorkspaceCustomParameters[];
  public get customParameters() {
    return this.interpolationForAttribute('custom_parameters') as any;
  }
  public set customParameters(value: DatabricksWorkspaceCustomParameters[] ) {
    this._customParameters = value;
  }
  public resetCustomParameters() {
    this._customParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customParametersInput() {
    return this._customParameters
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DatabricksWorkspaceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DatabricksWorkspaceTimeouts ) {
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
      customer_managed_key_enabled: cdktf.booleanToTerraform(this._customerManagedKeyEnabled),
      infrastructure_encryption_enabled: cdktf.booleanToTerraform(this._infrastructureEncryptionEnabled),
      location: cdktf.stringToTerraform(this._location),
      managed_resource_group_name: cdktf.stringToTerraform(this._managedResourceGroupName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku: cdktf.stringToTerraform(this._sku),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      custom_parameters: cdktf.listMapper(databricksWorkspaceCustomParametersToTerraform)(this._customParameters),
      timeouts: databricksWorkspaceTimeoutsToTerraform(this._timeouts),
    };
  }
}
