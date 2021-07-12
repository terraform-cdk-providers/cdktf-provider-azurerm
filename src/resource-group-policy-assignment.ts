// https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceGroupPolicyAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment.html#description ResourceGroupPolicyAssignment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment.html#display_name ResourceGroupPolicyAssignment#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment.html#enforce ResourceGroupPolicyAssignment#enforce}
  */
  readonly enforce?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment.html#location ResourceGroupPolicyAssignment#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment.html#metadata ResourceGroupPolicyAssignment#metadata}
  */
  readonly metadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment.html#name ResourceGroupPolicyAssignment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment.html#not_scopes ResourceGroupPolicyAssignment#not_scopes}
  */
  readonly notScopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment.html#parameters ResourceGroupPolicyAssignment#parameters}
  */
  readonly parameters?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment.html#policy_definition_id ResourceGroupPolicyAssignment#policy_definition_id}
  */
  readonly policyDefinitionId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment.html#resource_group_id ResourceGroupPolicyAssignment#resource_group_id}
  */
  readonly resourceGroupId: string;
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment.html#identity ResourceGroupPolicyAssignment#identity}
  */
  readonly identity?: ResourceGroupPolicyAssignmentIdentity[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment.html#timeouts ResourceGroupPolicyAssignment#timeouts}
  */
  readonly timeouts?: ResourceGroupPolicyAssignmentTimeouts;
}
export interface ResourceGroupPolicyAssignmentIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment.html#type ResourceGroupPolicyAssignment#type}
  */
  readonly type?: string;
}

function resourceGroupPolicyAssignmentIdentityToTerraform(struct?: ResourceGroupPolicyAssignmentIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface ResourceGroupPolicyAssignmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment.html#create ResourceGroupPolicyAssignment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment.html#delete ResourceGroupPolicyAssignment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment.html#read ResourceGroupPolicyAssignment#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment.html#update ResourceGroupPolicyAssignment#update}
  */
  readonly update?: string;
}

function resourceGroupPolicyAssignmentTimeoutsToTerraform(struct?: ResourceGroupPolicyAssignmentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment.html azurerm_resource_group_policy_assignment}
*/
export class ResourceGroupPolicyAssignment extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/resource_group_policy_assignment.html azurerm_resource_group_policy_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceGroupPolicyAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceGroupPolicyAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_resource_group_policy_assignment',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._enforce = config.enforce;
    this._location = config.location;
    this._metadata = config.metadata;
    this._name = config.name;
    this._notScopes = config.notScopes;
    this._parameters = config.parameters;
    this._policyDefinitionId = config.policyDefinitionId;
    this._resourceGroupId = config.resourceGroupId;
    this._identity = config.identity;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string ) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // enforce - computed: false, optional: true, required: false
  private _enforce?: boolean;
  public get enforce() {
    return this.getBooleanAttribute('enforce');
  }
  public set enforce(value: boolean ) {
    this._enforce = value;
  }
  public resetEnforce() {
    this._enforce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceInput() {
    return this._enforce
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: true, required: false
  private _location?: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string ) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: string;
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
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

  // not_scopes - computed: false, optional: true, required: false
  private _notScopes?: string[];
  public get notScopes() {
    return this.getListAttribute('not_scopes');
  }
  public set notScopes(value: string[] ) {
    this._notScopes = value;
  }
  public resetNotScopes() {
    this._notScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notScopesInput() {
    return this._notScopes
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string;
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string ) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
  }

  // policy_definition_id - computed: false, optional: false, required: true
  private _policyDefinitionId: string;
  public get policyDefinitionId() {
    return this.getStringAttribute('policy_definition_id');
  }
  public set policyDefinitionId(value: string) {
    this._policyDefinitionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDefinitionIdInput() {
    return this._policyDefinitionId
  }

  // resource_group_id - computed: false, optional: false, required: true
  private _resourceGroupId: string;
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: ResourceGroupPolicyAssignmentIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: ResourceGroupPolicyAssignmentIdentity[] ) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ResourceGroupPolicyAssignmentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ResourceGroupPolicyAssignmentTimeouts ) {
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
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      enforce: cdktf.booleanToTerraform(this._enforce),
      location: cdktf.stringToTerraform(this._location),
      metadata: cdktf.stringToTerraform(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      not_scopes: cdktf.listMapper(cdktf.stringToTerraform)(this._notScopes),
      parameters: cdktf.stringToTerraform(this._parameters),
      policy_definition_id: cdktf.stringToTerraform(this._policyDefinitionId),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      identity: cdktf.listMapper(resourceGroupPolicyAssignmentIdentityToTerraform)(this._identity),
      timeouts: resourceGroupPolicyAssignmentTimeoutsToTerraform(this._timeouts),
    };
  }
}
