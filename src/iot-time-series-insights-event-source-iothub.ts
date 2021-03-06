// https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotTimeSeriesInsightsEventSourceIothubConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub.html#consumer_group_name IotTimeSeriesInsightsEventSourceIothub#consumer_group_name}
  */
  readonly consumerGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub.html#environment_id IotTimeSeriesInsightsEventSourceIothub#environment_id}
  */
  readonly environmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub.html#event_source_resource_id IotTimeSeriesInsightsEventSourceIothub#event_source_resource_id}
  */
  readonly eventSourceResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub.html#iothub_name IotTimeSeriesInsightsEventSourceIothub#iothub_name}
  */
  readonly iothubName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub.html#location IotTimeSeriesInsightsEventSourceIothub#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub.html#name IotTimeSeriesInsightsEventSourceIothub#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub.html#shared_access_key IotTimeSeriesInsightsEventSourceIothub#shared_access_key}
  */
  readonly sharedAccessKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub.html#shared_access_key_name IotTimeSeriesInsightsEventSourceIothub#shared_access_key_name}
  */
  readonly sharedAccessKeyName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub.html#tags IotTimeSeriesInsightsEventSourceIothub#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub.html#timestamp_property_name IotTimeSeriesInsightsEventSourceIothub#timestamp_property_name}
  */
  readonly timestampPropertyName?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub.html#timeouts IotTimeSeriesInsightsEventSourceIothub#timeouts}
  */
  readonly timeouts?: IotTimeSeriesInsightsEventSourceIothubTimeouts;
}
export interface IotTimeSeriesInsightsEventSourceIothubTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub.html#create IotTimeSeriesInsightsEventSourceIothub#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub.html#delete IotTimeSeriesInsightsEventSourceIothub#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub.html#read IotTimeSeriesInsightsEventSourceIothub#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub.html#update IotTimeSeriesInsightsEventSourceIothub#update}
  */
  readonly update?: string;
}

function iotTimeSeriesInsightsEventSourceIothubTimeoutsToTerraform(struct?: IotTimeSeriesInsightsEventSourceIothubTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub.html azurerm_iot_time_series_insights_event_source_iothub}
*/
export class IotTimeSeriesInsightsEventSourceIothub extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/iot_time_series_insights_event_source_iothub.html azurerm_iot_time_series_insights_event_source_iothub} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotTimeSeriesInsightsEventSourceIothubConfig
  */
  public constructor(scope: Construct, id: string, config: IotTimeSeriesInsightsEventSourceIothubConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_iot_time_series_insights_event_source_iothub',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._consumerGroupName = config.consumerGroupName;
    this._environmentId = config.environmentId;
    this._eventSourceResourceId = config.eventSourceResourceId;
    this._iothubName = config.iothubName;
    this._location = config.location;
    this._name = config.name;
    this._sharedAccessKey = config.sharedAccessKey;
    this._sharedAccessKeyName = config.sharedAccessKeyName;
    this._tags = config.tags;
    this._timestampPropertyName = config.timestampPropertyName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consumer_group_name - computed: false, optional: false, required: true
  private _consumerGroupName: string;
  public get consumerGroupName() {
    return this.getStringAttribute('consumer_group_name');
  }
  public set consumerGroupName(value: string) {
    this._consumerGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerGroupNameInput() {
    return this._consumerGroupName
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId: string;
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId
  }

  // event_source_resource_id - computed: false, optional: false, required: true
  private _eventSourceResourceId: string;
  public get eventSourceResourceId() {
    return this.getStringAttribute('event_source_resource_id');
  }
  public set eventSourceResourceId(value: string) {
    this._eventSourceResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSourceResourceIdInput() {
    return this._eventSourceResourceId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // iothub_name - computed: false, optional: false, required: true
  private _iothubName: string;
  public get iothubName() {
    return this.getStringAttribute('iothub_name');
  }
  public set iothubName(value: string) {
    this._iothubName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iothubNameInput() {
    return this._iothubName
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

  // shared_access_key - computed: false, optional: false, required: true
  private _sharedAccessKey: string;
  public get sharedAccessKey() {
    return this.getStringAttribute('shared_access_key');
  }
  public set sharedAccessKey(value: string) {
    this._sharedAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedAccessKeyInput() {
    return this._sharedAccessKey
  }

  // shared_access_key_name - computed: false, optional: false, required: true
  private _sharedAccessKeyName: string;
  public get sharedAccessKeyName() {
    return this.getStringAttribute('shared_access_key_name');
  }
  public set sharedAccessKeyName(value: string) {
    this._sharedAccessKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedAccessKeyNameInput() {
    return this._sharedAccessKeyName
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

  // timestamp_property_name - computed: true, optional: true, required: false
  private _timestampPropertyName?: string;
  public get timestampPropertyName() {
    return this.getStringAttribute('timestamp_property_name');
  }
  public set timestampPropertyName(value: string) {
    this._timestampPropertyName = value;
  }
  public resetTimestampPropertyName() {
    this._timestampPropertyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampPropertyNameInput() {
    return this._timestampPropertyName
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IotTimeSeriesInsightsEventSourceIothubTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: IotTimeSeriesInsightsEventSourceIothubTimeouts ) {
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
      consumer_group_name: cdktf.stringToTerraform(this._consumerGroupName),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      event_source_resource_id: cdktf.stringToTerraform(this._eventSourceResourceId),
      iothub_name: cdktf.stringToTerraform(this._iothubName),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      shared_access_key: cdktf.stringToTerraform(this._sharedAccessKey),
      shared_access_key_name: cdktf.stringToTerraform(this._sharedAccessKeyName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timestamp_property_name: cdktf.stringToTerraform(this._timestampPropertyName),
      timeouts: iotTimeSeriesInsightsEventSourceIothubTimeoutsToTerraform(this._timeouts),
    };
  }
}
