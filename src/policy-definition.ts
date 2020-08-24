// https://www.terraform.io/docs/providers/azurerm/r/policy_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface PolicyDefinitionConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly displayName: string;
  readonly managementGroupId?: string;
  readonly metadata?: string;
  readonly mode: string;
  readonly name: string;
  readonly parameters?: string;
  readonly policyRule?: string;
  readonly policyType: string;
  /** timeouts block */
  readonly timeouts?: PolicyDefinitionTimeouts;
}
export interface PolicyDefinitionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class PolicyDefinition extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: PolicyDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_policy_definition',
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
    this._managementGroupId = config.managementGroupId;
    this._metadata = config.metadata;
    this._mode = config.mode;
    this._name = config.name;
    this._parameters = config.parameters;
    this._policyRule = config.policyRule;
    this._policyType = config.policyType;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
    this._displayName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // management_group_id - computed: false, optional: true, required: false
  private _managementGroupId?: string;
  public get managementGroupId() {
    return this._managementGroupId;
  }
  public set managementGroupId(value: string | undefined) {
    this._managementGroupId = value;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: string;
  public get metadata() {
    return this._metadata ?? this.getStringAttribute('metadata');
  }
  public set metadata(value: string | undefined) {
    this._metadata = value;
  }

  // mode - computed: false, optional: false, required: true
  private _mode: string;
  public get mode() {
    return this._mode;
  }
  public set mode(value: string) {
    this._mode = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string;
  public get parameters() {
    return this._parameters;
  }
  public set parameters(value: string | undefined) {
    this._parameters = value;
  }

  // policy_rule - computed: false, optional: true, required: false
  private _policyRule?: string;
  public get policyRule() {
    return this._policyRule;
  }
  public set policyRule(value: string | undefined) {
    this._policyRule = value;
  }

  // policy_type - computed: false, optional: false, required: true
  private _policyType: string;
  public get policyType() {
    return this._policyType;
  }
  public set policyType(value: string) {
    this._policyType = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PolicyDefinitionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: PolicyDefinitionTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      display_name: this._displayName,
      management_group_id: this._managementGroupId,
      metadata: this._metadata,
      mode: this._mode,
      name: this._name,
      parameters: this._parameters,
      policy_rule: this._policyRule,
      policy_type: this._policyType,
      timeouts: this._timeouts,
    };
  }
}
