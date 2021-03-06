// https://www.terraform.io/docs/providers/azurerm/r/private_dns_mx_record.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivateDnsMxRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_mx_record.html#name PrivateDnsMxRecord#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_mx_record.html#resource_group_name PrivateDnsMxRecord#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_mx_record.html#tags PrivateDnsMxRecord#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_mx_record.html#ttl PrivateDnsMxRecord#ttl}
  */
  readonly ttl: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_mx_record.html#zone_name PrivateDnsMxRecord#zone_name}
  */
  readonly zoneName: string;
  /**
  * record block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_mx_record.html#record PrivateDnsMxRecord#record}
  */
  readonly record: PrivateDnsMxRecordRecord[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_mx_record.html#timeouts PrivateDnsMxRecord#timeouts}
  */
  readonly timeouts?: PrivateDnsMxRecordTimeouts;
}
export interface PrivateDnsMxRecordRecord {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_mx_record.html#exchange PrivateDnsMxRecord#exchange}
  */
  readonly exchange: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_mx_record.html#preference PrivateDnsMxRecord#preference}
  */
  readonly preference: number;
}

function privateDnsMxRecordRecordToTerraform(struct?: PrivateDnsMxRecordRecord): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exchange: cdktf.stringToTerraform(struct!.exchange),
    preference: cdktf.numberToTerraform(struct!.preference),
  }
}

export interface PrivateDnsMxRecordTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_mx_record.html#create PrivateDnsMxRecord#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_mx_record.html#delete PrivateDnsMxRecord#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_mx_record.html#read PrivateDnsMxRecord#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_mx_record.html#update PrivateDnsMxRecord#update}
  */
  readonly update?: string;
}

function privateDnsMxRecordTimeoutsToTerraform(struct?: PrivateDnsMxRecordTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_mx_record.html azurerm_private_dns_mx_record}
*/
export class PrivateDnsMxRecord extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_mx_record.html azurerm_private_dns_mx_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivateDnsMxRecordConfig
  */
  public constructor(scope: Construct, id: string, config: PrivateDnsMxRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_private_dns_mx_record',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._ttl = config.ttl;
    this._zoneName = config.zoneName;
    this._record = config.record;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string ) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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

  // ttl - computed: false, optional: false, required: true
  private _ttl: number;
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl
  }

  // zone_name - computed: false, optional: false, required: true
  private _zoneName: string;
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName
  }

  // record - computed: false, optional: false, required: true
  private _record: PrivateDnsMxRecordRecord[];
  public get record() {
    return this.interpolationForAttribute('record') as any;
  }
  public set record(value: PrivateDnsMxRecordRecord[]) {
    this._record = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordInput() {
    return this._record
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PrivateDnsMxRecordTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: PrivateDnsMxRecordTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      ttl: cdktf.numberToTerraform(this._ttl),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      record: cdktf.listMapper(privateDnsMxRecordRecordToTerraform)(this._record),
      timeouts: privateDnsMxRecordTimeoutsToTerraform(this._timeouts),
    };
  }
}
