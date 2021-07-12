// https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LighthouseDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html#description LighthouseDefinition#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html#lighthouse_definition_id LighthouseDefinition#lighthouse_definition_id}
  */
  readonly lighthouseDefinitionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html#managing_tenant_id LighthouseDefinition#managing_tenant_id}
  */
  readonly managingTenantId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html#name LighthouseDefinition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html#scope LighthouseDefinition#scope}
  */
  readonly scope: string;
  /**
  * authorization block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html#authorization LighthouseDefinition#authorization}
  */
  readonly authorization: LighthouseDefinitionAuthorization[];
  /**
  * plan block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html#plan LighthouseDefinition#plan}
  */
  readonly plan?: LighthouseDefinitionPlan[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html#timeouts LighthouseDefinition#timeouts}
  */
  readonly timeouts?: LighthouseDefinitionTimeouts;
}
export interface LighthouseDefinitionAuthorization {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html#delegated_role_definition_ids LighthouseDefinition#delegated_role_definition_ids}
  */
  readonly delegatedRoleDefinitionIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html#principal_display_name LighthouseDefinition#principal_display_name}
  */
  readonly principalDisplayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html#principal_id LighthouseDefinition#principal_id}
  */
  readonly principalId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html#role_definition_id LighthouseDefinition#role_definition_id}
  */
  readonly roleDefinitionId: string;
}

function lighthouseDefinitionAuthorizationToTerraform(struct?: LighthouseDefinitionAuthorization): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delegated_role_definition_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.delegatedRoleDefinitionIds),
    principal_display_name: cdktf.stringToTerraform(struct!.principalDisplayName),
    principal_id: cdktf.stringToTerraform(struct!.principalId),
    role_definition_id: cdktf.stringToTerraform(struct!.roleDefinitionId),
  }
}

export interface LighthouseDefinitionPlan {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html#name LighthouseDefinition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html#product LighthouseDefinition#product}
  */
  readonly product: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html#publisher LighthouseDefinition#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html#version LighthouseDefinition#version}
  */
  readonly version: string;
}

function lighthouseDefinitionPlanToTerraform(struct?: LighthouseDefinitionPlan): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    product: cdktf.stringToTerraform(struct!.product),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface LighthouseDefinitionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html#create LighthouseDefinition#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html#delete LighthouseDefinition#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html#read LighthouseDefinition#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html#update LighthouseDefinition#update}
  */
  readonly update?: string;
}

function lighthouseDefinitionTimeoutsToTerraform(struct?: LighthouseDefinitionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html azurerm_lighthouse_definition}
*/
export class LighthouseDefinition extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/lighthouse_definition.html azurerm_lighthouse_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LighthouseDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: LighthouseDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_lighthouse_definition',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._lighthouseDefinitionId = config.lighthouseDefinitionId;
    this._managingTenantId = config.managingTenantId;
    this._name = config.name;
    this._scope = config.scope;
    this._authorization = config.authorization;
    this._plan = config.plan;
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lighthouse_definition_id - computed: true, optional: true, required: false
  private _lighthouseDefinitionId?: string;
  public get lighthouseDefinitionId() {
    return this.getStringAttribute('lighthouse_definition_id');
  }
  public set lighthouseDefinitionId(value: string) {
    this._lighthouseDefinitionId = value;
  }
  public resetLighthouseDefinitionId() {
    this._lighthouseDefinitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lighthouseDefinitionIdInput() {
    return this._lighthouseDefinitionId
  }

  // managing_tenant_id - computed: false, optional: false, required: true
  private _managingTenantId: string;
  public get managingTenantId() {
    return this.getStringAttribute('managing_tenant_id');
  }
  public set managingTenantId(value: string) {
    this._managingTenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managingTenantIdInput() {
    return this._managingTenantId
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

  // authorization - computed: false, optional: false, required: true
  private _authorization: LighthouseDefinitionAuthorization[];
  public get authorization() {
    return this.interpolationForAttribute('authorization') as any;
  }
  public set authorization(value: LighthouseDefinitionAuthorization[]) {
    this._authorization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization
  }

  // plan - computed: false, optional: true, required: false
  private _plan?: LighthouseDefinitionPlan[];
  public get plan() {
    return this.interpolationForAttribute('plan') as any;
  }
  public set plan(value: LighthouseDefinitionPlan[] ) {
    this._plan = value;
  }
  public resetPlan() {
    this._plan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LighthouseDefinitionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: LighthouseDefinitionTimeouts ) {
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
      lighthouse_definition_id: cdktf.stringToTerraform(this._lighthouseDefinitionId),
      managing_tenant_id: cdktf.stringToTerraform(this._managingTenantId),
      name: cdktf.stringToTerraform(this._name),
      scope: cdktf.stringToTerraform(this._scope),
      authorization: cdktf.listMapper(lighthouseDefinitionAuthorizationToTerraform)(this._authorization),
      plan: cdktf.listMapper(lighthouseDefinitionPlanToTerraform)(this._plan),
      timeouts: lighthouseDefinitionTimeoutsToTerraform(this._timeouts),
    };
  }
}
