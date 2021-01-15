// https://www.terraform.io/docs/providers/azurerm/r/eventgrid_domain.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventgridDomainConfig extends cdktf.TerraformMetaArguments {
  readonly inboundIpRule?: EventgridDomainInboundIpRule[];
  readonly inputSchema?: string;
  readonly location: string;
  readonly name: string;
  readonly publicNetworkAccessEnabled?: boolean;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** input_mapping_default_values block */
  readonly inputMappingDefaultValues?: EventgridDomainInputMappingDefaultValues[];
  /** input_mapping_fields block */
  readonly inputMappingFields?: EventgridDomainInputMappingFields[];
  /** timeouts block */
  readonly timeouts?: EventgridDomainTimeouts;
}
export interface EventgridDomainInboundIpRule {
  readonly action?: string;
  readonly ipMask?: string;
}

function eventgridDomainInboundIpRuleToTerraform(struct?: EventgridDomainInboundIpRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    ip_mask: cdktf.stringToTerraform(struct!.ipMask),
  }
}

export interface EventgridDomainInputMappingDefaultValues {
  readonly dataVersion?: string;
  readonly eventType?: string;
  readonly subject?: string;
}

function eventgridDomainInputMappingDefaultValuesToTerraform(struct?: EventgridDomainInputMappingDefaultValues): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_version: cdktf.stringToTerraform(struct!.dataVersion),
    event_type: cdktf.stringToTerraform(struct!.eventType),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}

export interface EventgridDomainInputMappingFields {
  readonly dataVersion?: string;
  readonly eventTime?: string;
  readonly eventType?: string;
  readonly id?: string;
  readonly subject?: string;
  readonly topic?: string;
}

function eventgridDomainInputMappingFieldsToTerraform(struct?: EventgridDomainInputMappingFields): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_version: cdktf.stringToTerraform(struct!.dataVersion),
    event_time: cdktf.stringToTerraform(struct!.eventTime),
    event_type: cdktf.stringToTerraform(struct!.eventType),
    id: cdktf.stringToTerraform(struct!.id),
    subject: cdktf.stringToTerraform(struct!.subject),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}

export interface EventgridDomainTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function eventgridDomainTimeoutsToTerraform(struct?: EventgridDomainTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class EventgridDomain extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: EventgridDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_eventgrid_domain',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._inboundIpRule = config.inboundIpRule;
    this._inputSchema = config.inputSchema;
    this._location = config.location;
    this._name = config.name;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._inputMappingDefaultValues = config.inputMappingDefaultValues;
    this._inputMappingFields = config.inputMappingFields;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inbound_ip_rule - computed: false, optional: true, required: false
  private _inboundIpRule?: EventgridDomainInboundIpRule[];
  public get inboundIpRule() {
    return this.interpolationForAttribute('inbound_ip_rule') as any;
  }
  public set inboundIpRule(value: EventgridDomainInboundIpRule[] ) {
    this._inboundIpRule = value;
  }
  public resetInboundIpRule() {
    this._inboundIpRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundIpRuleInput() {
    return this._inboundIpRule
  }

  // input_schema - computed: false, optional: true, required: false
  private _inputSchema?: string;
  public get inputSchema() {
    return this.getStringAttribute('input_schema');
  }
  public set inputSchema(value: string ) {
    this._inputSchema = value;
  }
  public resetInputSchema() {
    this._inputSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputSchemaInput() {
    return this._inputSchema
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

  // primary_access_key - computed: true, optional: false, required: false
  public get primaryAccessKey() {
    return this.getStringAttribute('primary_access_key');
  }

  // public_network_access_enabled - computed: false, optional: true, required: false
  private _publicNetworkAccessEnabled?: boolean;
  public get publicNetworkAccessEnabled() {
    return this.getBooleanAttribute('public_network_access_enabled');
  }
  public set publicNetworkAccessEnabled(value: boolean ) {
    this._publicNetworkAccessEnabled = value;
  }
  public resetPublicNetworkAccessEnabled() {
    this._publicNetworkAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkAccessEnabledInput() {
    return this._publicNetworkAccessEnabled
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

  // secondary_access_key - computed: true, optional: false, required: false
  public get secondaryAccessKey() {
    return this.getStringAttribute('secondary_access_key');
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

  // input_mapping_default_values - computed: false, optional: true, required: false
  private _inputMappingDefaultValues?: EventgridDomainInputMappingDefaultValues[];
  public get inputMappingDefaultValues() {
    return this.interpolationForAttribute('input_mapping_default_values') as any;
  }
  public set inputMappingDefaultValues(value: EventgridDomainInputMappingDefaultValues[] ) {
    this._inputMappingDefaultValues = value;
  }
  public resetInputMappingDefaultValues() {
    this._inputMappingDefaultValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputMappingDefaultValuesInput() {
    return this._inputMappingDefaultValues
  }

  // input_mapping_fields - computed: false, optional: true, required: false
  private _inputMappingFields?: EventgridDomainInputMappingFields[];
  public get inputMappingFields() {
    return this.interpolationForAttribute('input_mapping_fields') as any;
  }
  public set inputMappingFields(value: EventgridDomainInputMappingFields[] ) {
    this._inputMappingFields = value;
  }
  public resetInputMappingFields() {
    this._inputMappingFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputMappingFieldsInput() {
    return this._inputMappingFields
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: EventgridDomainTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: EventgridDomainTimeouts ) {
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
      inbound_ip_rule: cdktf.listMapper(eventgridDomainInboundIpRuleToTerraform)(this._inboundIpRule),
      input_schema: cdktf.stringToTerraform(this._inputSchema),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      input_mapping_default_values: cdktf.listMapper(eventgridDomainInputMappingDefaultValuesToTerraform)(this._inputMappingDefaultValues),
      input_mapping_fields: cdktf.listMapper(eventgridDomainInputMappingFieldsToTerraform)(this._inputMappingFields),
      timeouts: eventgridDomainTimeoutsToTerraform(this._timeouts),
    };
  }
}
