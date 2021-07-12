// https://www.terraform.io/docs/providers/azurerm/r/policy_virtual_machine_configuration_assignment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyVirtualMachineConfigurationAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_virtual_machine_configuration_assignment.html#location PolicyVirtualMachineConfigurationAssignment#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_virtual_machine_configuration_assignment.html#name PolicyVirtualMachineConfigurationAssignment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_virtual_machine_configuration_assignment.html#virtual_machine_id PolicyVirtualMachineConfigurationAssignment#virtual_machine_id}
  */
  readonly virtualMachineId: string;
  /**
  * configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_virtual_machine_configuration_assignment.html#configuration PolicyVirtualMachineConfigurationAssignment#configuration}
  */
  readonly configuration: PolicyVirtualMachineConfigurationAssignmentConfiguration[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_virtual_machine_configuration_assignment.html#timeouts PolicyVirtualMachineConfigurationAssignment#timeouts}
  */
  readonly timeouts?: PolicyVirtualMachineConfigurationAssignmentTimeouts;
}
export interface PolicyVirtualMachineConfigurationAssignmentConfigurationParameter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_virtual_machine_configuration_assignment.html#name PolicyVirtualMachineConfigurationAssignment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_virtual_machine_configuration_assignment.html#value PolicyVirtualMachineConfigurationAssignment#value}
  */
  readonly value: string;
}

function policyVirtualMachineConfigurationAssignmentConfigurationParameterToTerraform(struct?: PolicyVirtualMachineConfigurationAssignmentConfigurationParameter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface PolicyVirtualMachineConfigurationAssignmentConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_virtual_machine_configuration_assignment.html#name PolicyVirtualMachineConfigurationAssignment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_virtual_machine_configuration_assignment.html#version PolicyVirtualMachineConfigurationAssignment#version}
  */
  readonly version?: string;
  /**
  * parameter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_virtual_machine_configuration_assignment.html#parameter PolicyVirtualMachineConfigurationAssignment#parameter}
  */
  readonly parameter?: PolicyVirtualMachineConfigurationAssignmentConfigurationParameter[];
}

function policyVirtualMachineConfigurationAssignmentConfigurationToTerraform(struct?: PolicyVirtualMachineConfigurationAssignmentConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
    parameter: cdktf.listMapper(policyVirtualMachineConfigurationAssignmentConfigurationParameterToTerraform)(struct!.parameter),
  }
}

export interface PolicyVirtualMachineConfigurationAssignmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_virtual_machine_configuration_assignment.html#create PolicyVirtualMachineConfigurationAssignment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_virtual_machine_configuration_assignment.html#delete PolicyVirtualMachineConfigurationAssignment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_virtual_machine_configuration_assignment.html#read PolicyVirtualMachineConfigurationAssignment#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/policy_virtual_machine_configuration_assignment.html#update PolicyVirtualMachineConfigurationAssignment#update}
  */
  readonly update?: string;
}

function policyVirtualMachineConfigurationAssignmentTimeoutsToTerraform(struct?: PolicyVirtualMachineConfigurationAssignmentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/policy_virtual_machine_configuration_assignment.html azurerm_policy_virtual_machine_configuration_assignment}
*/
export class PolicyVirtualMachineConfigurationAssignment extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/policy_virtual_machine_configuration_assignment.html azurerm_policy_virtual_machine_configuration_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyVirtualMachineConfigurationAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyVirtualMachineConfigurationAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_policy_virtual_machine_configuration_assignment',
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
    this._virtualMachineId = config.virtualMachineId;
    this._configuration = config.configuration;
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

  // virtual_machine_id - computed: false, optional: false, required: true
  private _virtualMachineId: string;
  public get virtualMachineId() {
    return this.getStringAttribute('virtual_machine_id');
  }
  public set virtualMachineId(value: string) {
    this._virtualMachineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineIdInput() {
    return this._virtualMachineId
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration: PolicyVirtualMachineConfigurationAssignmentConfiguration[];
  public get configuration() {
    return this.interpolationForAttribute('configuration') as any;
  }
  public set configuration(value: PolicyVirtualMachineConfigurationAssignmentConfiguration[]) {
    this._configuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PolicyVirtualMachineConfigurationAssignmentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: PolicyVirtualMachineConfigurationAssignmentTimeouts ) {
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
      virtual_machine_id: cdktf.stringToTerraform(this._virtualMachineId),
      configuration: cdktf.listMapper(policyVirtualMachineConfigurationAssignmentConfigurationToTerraform)(this._configuration),
      timeouts: policyVirtualMachineConfigurationAssignmentTimeoutsToTerraform(this._timeouts),
    };
  }
}
