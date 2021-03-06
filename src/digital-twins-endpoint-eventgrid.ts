// https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventgrid.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DigitalTwinsEndpointEventgridConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventgrid.html#dead_letter_storage_secret DigitalTwinsEndpointEventgrid#dead_letter_storage_secret}
  */
  readonly deadLetterStorageSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventgrid.html#digital_twins_id DigitalTwinsEndpointEventgrid#digital_twins_id}
  */
  readonly digitalTwinsId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventgrid.html#eventgrid_topic_endpoint DigitalTwinsEndpointEventgrid#eventgrid_topic_endpoint}
  */
  readonly eventgridTopicEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventgrid.html#eventgrid_topic_primary_access_key DigitalTwinsEndpointEventgrid#eventgrid_topic_primary_access_key}
  */
  readonly eventgridTopicPrimaryAccessKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventgrid.html#eventgrid_topic_secondary_access_key DigitalTwinsEndpointEventgrid#eventgrid_topic_secondary_access_key}
  */
  readonly eventgridTopicSecondaryAccessKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventgrid.html#name DigitalTwinsEndpointEventgrid#name}
  */
  readonly name: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventgrid.html#timeouts DigitalTwinsEndpointEventgrid#timeouts}
  */
  readonly timeouts?: DigitalTwinsEndpointEventgridTimeouts;
}
export interface DigitalTwinsEndpointEventgridTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventgrid.html#create DigitalTwinsEndpointEventgrid#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventgrid.html#delete DigitalTwinsEndpointEventgrid#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventgrid.html#read DigitalTwinsEndpointEventgrid#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventgrid.html#update DigitalTwinsEndpointEventgrid#update}
  */
  readonly update?: string;
}

function digitalTwinsEndpointEventgridTimeoutsToTerraform(struct?: DigitalTwinsEndpointEventgridTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventgrid.html azurerm_digital_twins_endpoint_eventgrid}
*/
export class DigitalTwinsEndpointEventgrid extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/digital_twins_endpoint_eventgrid.html azurerm_digital_twins_endpoint_eventgrid} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DigitalTwinsEndpointEventgridConfig
  */
  public constructor(scope: Construct, id: string, config: DigitalTwinsEndpointEventgridConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_digital_twins_endpoint_eventgrid',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._deadLetterStorageSecret = config.deadLetterStorageSecret;
    this._digitalTwinsId = config.digitalTwinsId;
    this._eventgridTopicEndpoint = config.eventgridTopicEndpoint;
    this._eventgridTopicPrimaryAccessKey = config.eventgridTopicPrimaryAccessKey;
    this._eventgridTopicSecondaryAccessKey = config.eventgridTopicSecondaryAccessKey;
    this._name = config.name;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dead_letter_storage_secret - computed: false, optional: true, required: false
  private _deadLetterStorageSecret?: string;
  public get deadLetterStorageSecret() {
    return this.getStringAttribute('dead_letter_storage_secret');
  }
  public set deadLetterStorageSecret(value: string ) {
    this._deadLetterStorageSecret = value;
  }
  public resetDeadLetterStorageSecret() {
    this._deadLetterStorageSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterStorageSecretInput() {
    return this._deadLetterStorageSecret
  }

  // digital_twins_id - computed: false, optional: false, required: true
  private _digitalTwinsId: string;
  public get digitalTwinsId() {
    return this.getStringAttribute('digital_twins_id');
  }
  public set digitalTwinsId(value: string) {
    this._digitalTwinsId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalTwinsIdInput() {
    return this._digitalTwinsId
  }

  // eventgrid_topic_endpoint - computed: false, optional: false, required: true
  private _eventgridTopicEndpoint: string;
  public get eventgridTopicEndpoint() {
    return this.getStringAttribute('eventgrid_topic_endpoint');
  }
  public set eventgridTopicEndpoint(value: string) {
    this._eventgridTopicEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventgridTopicEndpointInput() {
    return this._eventgridTopicEndpoint
  }

  // eventgrid_topic_primary_access_key - computed: false, optional: false, required: true
  private _eventgridTopicPrimaryAccessKey: string;
  public get eventgridTopicPrimaryAccessKey() {
    return this.getStringAttribute('eventgrid_topic_primary_access_key');
  }
  public set eventgridTopicPrimaryAccessKey(value: string) {
    this._eventgridTopicPrimaryAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventgridTopicPrimaryAccessKeyInput() {
    return this._eventgridTopicPrimaryAccessKey
  }

  // eventgrid_topic_secondary_access_key - computed: false, optional: false, required: true
  private _eventgridTopicSecondaryAccessKey: string;
  public get eventgridTopicSecondaryAccessKey() {
    return this.getStringAttribute('eventgrid_topic_secondary_access_key');
  }
  public set eventgridTopicSecondaryAccessKey(value: string) {
    this._eventgridTopicSecondaryAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventgridTopicSecondaryAccessKeyInput() {
    return this._eventgridTopicSecondaryAccessKey
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DigitalTwinsEndpointEventgridTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DigitalTwinsEndpointEventgridTimeouts ) {
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
      dead_letter_storage_secret: cdktf.stringToTerraform(this._deadLetterStorageSecret),
      digital_twins_id: cdktf.stringToTerraform(this._digitalTwinsId),
      eventgrid_topic_endpoint: cdktf.stringToTerraform(this._eventgridTopicEndpoint),
      eventgrid_topic_primary_access_key: cdktf.stringToTerraform(this._eventgridTopicPrimaryAccessKey),
      eventgrid_topic_secondary_access_key: cdktf.stringToTerraform(this._eventgridTopicSecondaryAccessKey),
      name: cdktf.stringToTerraform(this._name),
      timeouts: digitalTwinsEndpointEventgridTimeoutsToTerraform(this._timeouts),
    };
  }
}
