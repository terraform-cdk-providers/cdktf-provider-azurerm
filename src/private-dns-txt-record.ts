// https://www.terraform.io/docs/providers/azurerm/r/private_dns_txt_record.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivateDnsTxtRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_txt_record.html#name PrivateDnsTxtRecord#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_txt_record.html#resource_group_name PrivateDnsTxtRecord#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_txt_record.html#tags PrivateDnsTxtRecord#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_txt_record.html#ttl PrivateDnsTxtRecord#ttl}
  */
  readonly ttl: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_txt_record.html#zone_name PrivateDnsTxtRecord#zone_name}
  */
  readonly zoneName: string;
  /**
  * record block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_txt_record.html#record PrivateDnsTxtRecord#record}
  */
  readonly record: PrivateDnsTxtRecordRecord[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_txt_record.html#timeouts PrivateDnsTxtRecord#timeouts}
  */
  readonly timeouts?: PrivateDnsTxtRecordTimeouts;
}
export interface PrivateDnsTxtRecordRecord {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_txt_record.html#value PrivateDnsTxtRecord#value}
  */
  readonly value: string;
}

function privateDnsTxtRecordRecordToTerraform(struct?: PrivateDnsTxtRecordRecord): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface PrivateDnsTxtRecordTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_txt_record.html#create PrivateDnsTxtRecord#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_txt_record.html#delete PrivateDnsTxtRecord#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_txt_record.html#read PrivateDnsTxtRecord#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_txt_record.html#update PrivateDnsTxtRecord#update}
  */
  readonly update?: string;
}

function privateDnsTxtRecordTimeoutsToTerraform(struct?: PrivateDnsTxtRecordTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_txt_record.html azurerm_private_dns_txt_record}
*/
export class PrivateDnsTxtRecord extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/private_dns_txt_record.html azurerm_private_dns_txt_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivateDnsTxtRecordConfig
  */
  public constructor(scope: Construct, id: string, config: PrivateDnsTxtRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_private_dns_txt_record',
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
  private _record: PrivateDnsTxtRecordRecord[];
  public get record() {
    return this.interpolationForAttribute('record') as any;
  }
  public set record(value: PrivateDnsTxtRecordRecord[]) {
    this._record = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordInput() {
    return this._record
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PrivateDnsTxtRecordTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: PrivateDnsTxtRecordTimeouts ) {
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
      record: cdktf.listMapper(privateDnsTxtRecordRecordToTerraform)(this._record),
      timeouts: privateDnsTxtRecordTimeoutsToTerraform(this._timeouts),
    };
  }
}
