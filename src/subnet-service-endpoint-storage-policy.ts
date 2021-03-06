// https://www.terraform.io/docs/providers/azurerm/r/subnet_service_endpoint_storage_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SubnetServiceEndpointStoragePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet_service_endpoint_storage_policy.html#location SubnetServiceEndpointStoragePolicy#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet_service_endpoint_storage_policy.html#name SubnetServiceEndpointStoragePolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet_service_endpoint_storage_policy.html#resource_group_name SubnetServiceEndpointStoragePolicy#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet_service_endpoint_storage_policy.html#tags SubnetServiceEndpointStoragePolicy#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet_service_endpoint_storage_policy.html#definition SubnetServiceEndpointStoragePolicy#definition}
  */
  readonly definition?: SubnetServiceEndpointStoragePolicyDefinition[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet_service_endpoint_storage_policy.html#timeouts SubnetServiceEndpointStoragePolicy#timeouts}
  */
  readonly timeouts?: SubnetServiceEndpointStoragePolicyTimeouts;
}
export interface SubnetServiceEndpointStoragePolicyDefinition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet_service_endpoint_storage_policy.html#description SubnetServiceEndpointStoragePolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet_service_endpoint_storage_policy.html#name SubnetServiceEndpointStoragePolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet_service_endpoint_storage_policy.html#service_resources SubnetServiceEndpointStoragePolicy#service_resources}
  */
  readonly serviceResources: string[];
}

function subnetServiceEndpointStoragePolicyDefinitionToTerraform(struct?: SubnetServiceEndpointStoragePolicyDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    service_resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.serviceResources),
  }
}

export interface SubnetServiceEndpointStoragePolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet_service_endpoint_storage_policy.html#create SubnetServiceEndpointStoragePolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet_service_endpoint_storage_policy.html#delete SubnetServiceEndpointStoragePolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet_service_endpoint_storage_policy.html#read SubnetServiceEndpointStoragePolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/subnet_service_endpoint_storage_policy.html#update SubnetServiceEndpointStoragePolicy#update}
  */
  readonly update?: string;
}

function subnetServiceEndpointStoragePolicyTimeoutsToTerraform(struct?: SubnetServiceEndpointStoragePolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/subnet_service_endpoint_storage_policy.html azurerm_subnet_service_endpoint_storage_policy}
*/
export class SubnetServiceEndpointStoragePolicy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/subnet_service_endpoint_storage_policy.html azurerm_subnet_service_endpoint_storage_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SubnetServiceEndpointStoragePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SubnetServiceEndpointStoragePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_subnet_service_endpoint_storage_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._definition = config.definition;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // definition - computed: false, optional: true, required: false
  private _definition?: SubnetServiceEndpointStoragePolicyDefinition[];
  public get definition() {
    return this.interpolationForAttribute('definition') as any;
  }
  public set definition(value: SubnetServiceEndpointStoragePolicyDefinition[] ) {
    this._definition = value;
  }
  public resetDefinition() {
    this._definition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SubnetServiceEndpointStoragePolicyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SubnetServiceEndpointStoragePolicyTimeouts ) {
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
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      definition: cdktf.listMapper(subnetServiceEndpointStoragePolicyDefinitionToTerraform)(this._definition),
      timeouts: subnetServiceEndpointStoragePolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
