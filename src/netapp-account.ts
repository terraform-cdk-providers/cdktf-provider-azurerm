// https://www.terraform.io/docs/providers/azurerm/r/netapp_account.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetappAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_account.html#location NetappAccount#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_account.html#name NetappAccount#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_account.html#resource_group_name NetappAccount#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_account.html#tags NetappAccount#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * active_directory block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_account.html#active_directory NetappAccount#active_directory}
  */
  readonly activeDirectory?: NetappAccountActiveDirectory[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_account.html#timeouts NetappAccount#timeouts}
  */
  readonly timeouts?: NetappAccountTimeouts;
}
export interface NetappAccountActiveDirectory {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_account.html#dns_servers NetappAccount#dns_servers}
  */
  readonly dnsServers: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_account.html#domain NetappAccount#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_account.html#organizational_unit NetappAccount#organizational_unit}
  */
  readonly organizationalUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_account.html#password NetappAccount#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_account.html#smb_server_name NetappAccount#smb_server_name}
  */
  readonly smbServerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_account.html#username NetappAccount#username}
  */
  readonly username: string;
}

function netappAccountActiveDirectoryToTerraform(struct?: NetappAccountActiveDirectory): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dns_servers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.dnsServers),
    domain: cdktf.stringToTerraform(struct!.domain),
    organizational_unit: cdktf.stringToTerraform(struct!.organizationalUnit),
    password: cdktf.stringToTerraform(struct!.password),
    smb_server_name: cdktf.stringToTerraform(struct!.smbServerName),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface NetappAccountTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_account.html#create NetappAccount#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_account.html#delete NetappAccount#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_account.html#read NetappAccount#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_account.html#update NetappAccount#update}
  */
  readonly update?: string;
}

function netappAccountTimeoutsToTerraform(struct?: NetappAccountTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_account.html azurerm_netapp_account}
*/
export class NetappAccount extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_account.html azurerm_netapp_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetappAccountConfig
  */
  public constructor(scope: Construct, id: string, config: NetappAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_netapp_account',
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
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._activeDirectory = config.activeDirectory;
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

  // active_directory - computed: false, optional: true, required: false
  private _activeDirectory?: NetappAccountActiveDirectory[];
  public get activeDirectory() {
    return this.interpolationForAttribute('active_directory') as any;
  }
  public set activeDirectory(value: NetappAccountActiveDirectory[] ) {
    this._activeDirectory = value;
  }
  public resetActiveDirectory() {
    this._activeDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryInput() {
    return this._activeDirectory
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NetappAccountTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: NetappAccountTimeouts ) {
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
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      active_directory: cdktf.listMapper(netappAccountActiveDirectoryToTerraform)(this._activeDirectory),
      timeouts: netappAccountTimeoutsToTerraform(this._timeouts),
    };
  }
}
