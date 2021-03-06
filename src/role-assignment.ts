// https://www.terraform.io/docs/providers/azurerm/r/role_assignment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/role_assignment.html#condition RoleAssignment#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/role_assignment.html#condition_version RoleAssignment#condition_version}
  */
  readonly conditionVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/role_assignment.html#delegated_managed_identity_resource_id RoleAssignment#delegated_managed_identity_resource_id}
  */
  readonly delegatedManagedIdentityResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/role_assignment.html#description RoleAssignment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/role_assignment.html#name RoleAssignment#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/role_assignment.html#principal_id RoleAssignment#principal_id}
  */
  readonly principalId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/role_assignment.html#role_definition_id RoleAssignment#role_definition_id}
  */
  readonly roleDefinitionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/role_assignment.html#role_definition_name RoleAssignment#role_definition_name}
  */
  readonly roleDefinitionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/role_assignment.html#scope RoleAssignment#scope}
  */
  readonly scope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/role_assignment.html#skip_service_principal_aad_check RoleAssignment#skip_service_principal_aad_check}
  */
  readonly skipServicePrincipalAadCheck?: boolean;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/role_assignment.html#timeouts RoleAssignment#timeouts}
  */
  readonly timeouts?: RoleAssignmentTimeouts;
}
export interface RoleAssignmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/role_assignment.html#create RoleAssignment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/role_assignment.html#delete RoleAssignment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/role_assignment.html#read RoleAssignment#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/role_assignment.html#update RoleAssignment#update}
  */
  readonly update?: string;
}

function roleAssignmentTimeoutsToTerraform(struct?: RoleAssignmentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/role_assignment.html azurerm_role_assignment}
*/
export class RoleAssignment extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/role_assignment.html azurerm_role_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoleAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: RoleAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_role_assignment',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._condition = config.condition;
    this._conditionVersion = config.conditionVersion;
    this._delegatedManagedIdentityResourceId = config.delegatedManagedIdentityResourceId;
    this._description = config.description;
    this._name = config.name;
    this._principalId = config.principalId;
    this._roleDefinitionId = config.roleDefinitionId;
    this._roleDefinitionName = config.roleDefinitionName;
    this._scope = config.scope;
    this._skipServicePrincipalAadCheck = config.skipServicePrincipalAadCheck;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // condition - computed: false, optional: true, required: false
  private _condition?: string;
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string ) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition
  }

  // condition_version - computed: false, optional: true, required: false
  private _conditionVersion?: string;
  public get conditionVersion() {
    return this.getStringAttribute('condition_version');
  }
  public set conditionVersion(value: string ) {
    this._conditionVersion = value;
  }
  public resetConditionVersion() {
    this._conditionVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionVersionInput() {
    return this._conditionVersion
  }

  // delegated_managed_identity_resource_id - computed: false, optional: true, required: false
  private _delegatedManagedIdentityResourceId?: string;
  public get delegatedManagedIdentityResourceId() {
    return this.getStringAttribute('delegated_managed_identity_resource_id');
  }
  public set delegatedManagedIdentityResourceId(value: string ) {
    this._delegatedManagedIdentityResourceId = value;
  }
  public resetDelegatedManagedIdentityResourceId() {
    this._delegatedManagedIdentityResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedManagedIdentityResourceIdInput() {
    return this._delegatedManagedIdentityResourceId
  }

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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // principal_id - computed: false, optional: false, required: true
  private _principalId: string;
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }
  public set principalId(value: string) {
    this._principalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdInput() {
    return this._principalId
  }

  // principal_type - computed: true, optional: false, required: false
  public get principalType() {
    return this.getStringAttribute('principal_type');
  }

  // role_definition_id - computed: true, optional: true, required: false
  private _roleDefinitionId?: string;
  public get roleDefinitionId() {
    return this.getStringAttribute('role_definition_id');
  }
  public set roleDefinitionId(value: string) {
    this._roleDefinitionId = value;
  }
  public resetRoleDefinitionId() {
    this._roleDefinitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleDefinitionIdInput() {
    return this._roleDefinitionId
  }

  // role_definition_name - computed: true, optional: true, required: false
  private _roleDefinitionName?: string;
  public get roleDefinitionName() {
    return this.getStringAttribute('role_definition_name');
  }
  public set roleDefinitionName(value: string) {
    this._roleDefinitionName = value;
  }
  public resetRoleDefinitionName() {
    this._roleDefinitionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleDefinitionNameInput() {
    return this._roleDefinitionName
  }

  // scope - computed: false, optional: false, required: true
  private _scope: string;
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope
  }

  // skip_service_principal_aad_check - computed: true, optional: true, required: false
  private _skipServicePrincipalAadCheck?: boolean;
  public get skipServicePrincipalAadCheck() {
    return this.getBooleanAttribute('skip_service_principal_aad_check');
  }
  public set skipServicePrincipalAadCheck(value: boolean) {
    this._skipServicePrincipalAadCheck = value;
  }
  public resetSkipServicePrincipalAadCheck() {
    this._skipServicePrincipalAadCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipServicePrincipalAadCheckInput() {
    return this._skipServicePrincipalAadCheck
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: RoleAssignmentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: RoleAssignmentTimeouts ) {
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
      condition: cdktf.stringToTerraform(this._condition),
      condition_version: cdktf.stringToTerraform(this._conditionVersion),
      delegated_managed_identity_resource_id: cdktf.stringToTerraform(this._delegatedManagedIdentityResourceId),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      principal_id: cdktf.stringToTerraform(this._principalId),
      role_definition_id: cdktf.stringToTerraform(this._roleDefinitionId),
      role_definition_name: cdktf.stringToTerraform(this._roleDefinitionName),
      scope: cdktf.stringToTerraform(this._scope),
      skip_service_principal_aad_check: cdktf.booleanToTerraform(this._skipServicePrincipalAadCheck),
      timeouts: roleAssignmentTimeoutsToTerraform(this._timeouts),
    };
  }
}
