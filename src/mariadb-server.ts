// https://www.terraform.io/docs/providers/azurerm/r/mariadb_server.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MariadbServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mariadb_server.html#administrator_login MariadbServer#administrator_login}
  */
  readonly administratorLogin?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mariadb_server.html#administrator_login_password MariadbServer#administrator_login_password}
  */
  readonly administratorLoginPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mariadb_server.html#auto_grow_enabled MariadbServer#auto_grow_enabled}
  */
  readonly autoGrowEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mariadb_server.html#backup_retention_days MariadbServer#backup_retention_days}
  */
  readonly backupRetentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mariadb_server.html#create_mode MariadbServer#create_mode}
  */
  readonly createMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mariadb_server.html#creation_source_server_id MariadbServer#creation_source_server_id}
  */
  readonly creationSourceServerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mariadb_server.html#geo_redundant_backup_enabled MariadbServer#geo_redundant_backup_enabled}
  */
  readonly geoRedundantBackupEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mariadb_server.html#location MariadbServer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mariadb_server.html#name MariadbServer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mariadb_server.html#public_network_access_enabled MariadbServer#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mariadb_server.html#resource_group_name MariadbServer#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mariadb_server.html#restore_point_in_time MariadbServer#restore_point_in_time}
  */
  readonly restorePointInTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mariadb_server.html#sku_name MariadbServer#sku_name}
  */
  readonly skuName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mariadb_server.html#ssl_enforcement MariadbServer#ssl_enforcement}
  */
  readonly sslEnforcement?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mariadb_server.html#ssl_enforcement_enabled MariadbServer#ssl_enforcement_enabled}
  */
  readonly sslEnforcementEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mariadb_server.html#storage_mb MariadbServer#storage_mb}
  */
  readonly storageMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mariadb_server.html#tags MariadbServer#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mariadb_server.html#version MariadbServer#version}
  */
  readonly version: string;
  /**
  * storage_profile block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mariadb_server.html#storage_profile MariadbServer#storage_profile}
  */
  readonly storageProfile?: MariadbServerStorageProfile[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mariadb_server.html#timeouts MariadbServer#timeouts}
  */
  readonly timeouts?: MariadbServerTimeouts;
}
export interface MariadbServerStorageProfile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mariadb_server.html#auto_grow MariadbServer#auto_grow}
  */
  readonly autoGrow?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mariadb_server.html#backup_retention_days MariadbServer#backup_retention_days}
  */
  readonly backupRetentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mariadb_server.html#geo_redundant_backup MariadbServer#geo_redundant_backup}
  */
  readonly geoRedundantBackup?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mariadb_server.html#storage_mb MariadbServer#storage_mb}
  */
  readonly storageMb?: number;
}

function mariadbServerStorageProfileToTerraform(struct?: MariadbServerStorageProfile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auto_grow: cdktf.stringToTerraform(struct!.autoGrow),
    backup_retention_days: cdktf.numberToTerraform(struct!.backupRetentionDays),
    geo_redundant_backup: cdktf.stringToTerraform(struct!.geoRedundantBackup),
    storage_mb: cdktf.numberToTerraform(struct!.storageMb),
  }
}

export interface MariadbServerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mariadb_server.html#create MariadbServer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mariadb_server.html#delete MariadbServer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mariadb_server.html#read MariadbServer#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mariadb_server.html#update MariadbServer#update}
  */
  readonly update?: string;
}

function mariadbServerTimeoutsToTerraform(struct?: MariadbServerTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/mariadb_server.html azurerm_mariadb_server}
*/
export class MariadbServer extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/mariadb_server.html azurerm_mariadb_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MariadbServerConfig
  */
  public constructor(scope: Construct, id: string, config: MariadbServerConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mariadb_server',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._administratorLogin = config.administratorLogin;
    this._administratorLoginPassword = config.administratorLoginPassword;
    this._autoGrowEnabled = config.autoGrowEnabled;
    this._backupRetentionDays = config.backupRetentionDays;
    this._createMode = config.createMode;
    this._creationSourceServerId = config.creationSourceServerId;
    this._geoRedundantBackupEnabled = config.geoRedundantBackupEnabled;
    this._location = config.location;
    this._name = config.name;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._restorePointInTime = config.restorePointInTime;
    this._skuName = config.skuName;
    this._sslEnforcement = config.sslEnforcement;
    this._sslEnforcementEnabled = config.sslEnforcementEnabled;
    this._storageMb = config.storageMb;
    this._tags = config.tags;
    this._version = config.version;
    this._storageProfile = config.storageProfile;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // administrator_login - computed: true, optional: true, required: false
  private _administratorLogin?: string;
  public get administratorLogin() {
    return this.getStringAttribute('administrator_login');
  }
  public set administratorLogin(value: string) {
    this._administratorLogin = value;
  }
  public resetAdministratorLogin() {
    this._administratorLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorLoginInput() {
    return this._administratorLogin
  }

  // administrator_login_password - computed: false, optional: true, required: false
  private _administratorLoginPassword?: string;
  public get administratorLoginPassword() {
    return this.getStringAttribute('administrator_login_password');
  }
  public set administratorLoginPassword(value: string ) {
    this._administratorLoginPassword = value;
  }
  public resetAdministratorLoginPassword() {
    this._administratorLoginPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorLoginPasswordInput() {
    return this._administratorLoginPassword
  }

  // auto_grow_enabled - computed: true, optional: true, required: false
  private _autoGrowEnabled?: boolean;
  public get autoGrowEnabled() {
    return this.getBooleanAttribute('auto_grow_enabled');
  }
  public set autoGrowEnabled(value: boolean) {
    this._autoGrowEnabled = value;
  }
  public resetAutoGrowEnabled() {
    this._autoGrowEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoGrowEnabledInput() {
    return this._autoGrowEnabled
  }

  // backup_retention_days - computed: true, optional: true, required: false
  private _backupRetentionDays?: number;
  public get backupRetentionDays() {
    return this.getNumberAttribute('backup_retention_days');
  }
  public set backupRetentionDays(value: number) {
    this._backupRetentionDays = value;
  }
  public resetBackupRetentionDays() {
    this._backupRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionDaysInput() {
    return this._backupRetentionDays
  }

  // create_mode - computed: false, optional: true, required: false
  private _createMode?: string;
  public get createMode() {
    return this.getStringAttribute('create_mode');
  }
  public set createMode(value: string ) {
    this._createMode = value;
  }
  public resetCreateMode() {
    this._createMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createModeInput() {
    return this._createMode
  }

  // creation_source_server_id - computed: false, optional: true, required: false
  private _creationSourceServerId?: string;
  public get creationSourceServerId() {
    return this.getStringAttribute('creation_source_server_id');
  }
  public set creationSourceServerId(value: string ) {
    this._creationSourceServerId = value;
  }
  public resetCreationSourceServerId() {
    this._creationSourceServerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationSourceServerIdInput() {
    return this._creationSourceServerId
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // geo_redundant_backup_enabled - computed: true, optional: true, required: false
  private _geoRedundantBackupEnabled?: boolean;
  public get geoRedundantBackupEnabled() {
    return this.getBooleanAttribute('geo_redundant_backup_enabled');
  }
  public set geoRedundantBackupEnabled(value: boolean) {
    this._geoRedundantBackupEnabled = value;
  }
  public resetGeoRedundantBackupEnabled() {
    this._geoRedundantBackupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoRedundantBackupEnabledInput() {
    return this._geoRedundantBackupEnabled
  }

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

  // restore_point_in_time - computed: false, optional: true, required: false
  private _restorePointInTime?: string;
  public get restorePointInTime() {
    return this.getStringAttribute('restore_point_in_time');
  }
  public set restorePointInTime(value: string ) {
    this._restorePointInTime = value;
  }
  public resetRestorePointInTime() {
    this._restorePointInTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restorePointInTimeInput() {
    return this._restorePointInTime
  }

  // sku_name - computed: false, optional: false, required: true
  private _skuName: string;
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string) {
    this._skuName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName
  }

  // ssl_enforcement - computed: true, optional: true, required: false
  private _sslEnforcement?: string;
  public get sslEnforcement() {
    return this.getStringAttribute('ssl_enforcement');
  }
  public set sslEnforcement(value: string) {
    this._sslEnforcement = value;
  }
  public resetSslEnforcement() {
    this._sslEnforcement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnforcementInput() {
    return this._sslEnforcement
  }

  // ssl_enforcement_enabled - computed: false, optional: true, required: false
  private _sslEnforcementEnabled?: boolean;
  public get sslEnforcementEnabled() {
    return this.getBooleanAttribute('ssl_enforcement_enabled');
  }
  public set sslEnforcementEnabled(value: boolean ) {
    this._sslEnforcementEnabled = value;
  }
  public resetSslEnforcementEnabled() {
    this._sslEnforcementEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnforcementEnabledInput() {
    return this._sslEnforcementEnabled
  }

  // storage_mb - computed: true, optional: true, required: false
  private _storageMb?: number;
  public get storageMb() {
    return this.getNumberAttribute('storage_mb');
  }
  public set storageMb(value: number) {
    this._storageMb = value;
  }
  public resetStorageMb() {
    this._storageMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageMbInput() {
    return this._storageMb
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

  // version - computed: false, optional: false, required: true
  private _version: string;
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }

  // storage_profile - computed: false, optional: true, required: false
  private _storageProfile?: MariadbServerStorageProfile[];
  public get storageProfile() {
    return this.interpolationForAttribute('storage_profile') as any;
  }
  public set storageProfile(value: MariadbServerStorageProfile[] ) {
    this._storageProfile = value;
  }
  public resetStorageProfile() {
    this._storageProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageProfileInput() {
    return this._storageProfile
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MariadbServerTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MariadbServerTimeouts ) {
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
      administrator_login: cdktf.stringToTerraform(this._administratorLogin),
      administrator_login_password: cdktf.stringToTerraform(this._administratorLoginPassword),
      auto_grow_enabled: cdktf.booleanToTerraform(this._autoGrowEnabled),
      backup_retention_days: cdktf.numberToTerraform(this._backupRetentionDays),
      create_mode: cdktf.stringToTerraform(this._createMode),
      creation_source_server_id: cdktf.stringToTerraform(this._creationSourceServerId),
      geo_redundant_backup_enabled: cdktf.booleanToTerraform(this._geoRedundantBackupEnabled),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      restore_point_in_time: cdktf.stringToTerraform(this._restorePointInTime),
      sku_name: cdktf.stringToTerraform(this._skuName),
      ssl_enforcement: cdktf.stringToTerraform(this._sslEnforcement),
      ssl_enforcement_enabled: cdktf.booleanToTerraform(this._sslEnforcementEnabled),
      storage_mb: cdktf.numberToTerraform(this._storageMb),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      version: cdktf.stringToTerraform(this._version),
      storage_profile: cdktf.listMapper(mariadbServerStorageProfileToTerraform)(this._storageProfile),
      timeouts: mariadbServerTimeoutsToTerraform(this._timeouts),
    };
  }
}
