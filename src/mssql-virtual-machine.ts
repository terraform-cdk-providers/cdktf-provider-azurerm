// https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MssqlVirtualMachineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#r_services_enabled MssqlVirtualMachine#r_services_enabled}
  */
  readonly rServicesEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#sql_connectivity_port MssqlVirtualMachine#sql_connectivity_port}
  */
  readonly sqlConnectivityPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#sql_connectivity_type MssqlVirtualMachine#sql_connectivity_type}
  */
  readonly sqlConnectivityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#sql_connectivity_update_password MssqlVirtualMachine#sql_connectivity_update_password}
  */
  readonly sqlConnectivityUpdatePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#sql_connectivity_update_username MssqlVirtualMachine#sql_connectivity_update_username}
  */
  readonly sqlConnectivityUpdateUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#sql_license_type MssqlVirtualMachine#sql_license_type}
  */
  readonly sqlLicenseType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#tags MssqlVirtualMachine#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#virtual_machine_id MssqlVirtualMachine#virtual_machine_id}
  */
  readonly virtualMachineId: string;
  /**
  * auto_backup block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#auto_backup MssqlVirtualMachine#auto_backup}
  */
  readonly autoBackup?: MssqlVirtualMachineAutoBackup[];
  /**
  * auto_patching block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#auto_patching MssqlVirtualMachine#auto_patching}
  */
  readonly autoPatching?: MssqlVirtualMachineAutoPatching[];
  /**
  * key_vault_credential block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#key_vault_credential MssqlVirtualMachine#key_vault_credential}
  */
  readonly keyVaultCredential?: MssqlVirtualMachineKeyVaultCredential[];
  /**
  * storage_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#storage_configuration MssqlVirtualMachine#storage_configuration}
  */
  readonly storageConfiguration?: MssqlVirtualMachineStorageConfiguration[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#timeouts MssqlVirtualMachine#timeouts}
  */
  readonly timeouts?: MssqlVirtualMachineTimeouts;
}
export interface MssqlVirtualMachineAutoBackupManualSchedule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#full_backup_frequency MssqlVirtualMachine#full_backup_frequency}
  */
  readonly fullBackupFrequency: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#full_backup_start_hour MssqlVirtualMachine#full_backup_start_hour}
  */
  readonly fullBackupStartHour: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#full_backup_window_in_hours MssqlVirtualMachine#full_backup_window_in_hours}
  */
  readonly fullBackupWindowInHours: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#log_backup_frequency_in_minutes MssqlVirtualMachine#log_backup_frequency_in_minutes}
  */
  readonly logBackupFrequencyInMinutes: number;
}

function mssqlVirtualMachineAutoBackupManualScheduleToTerraform(struct?: MssqlVirtualMachineAutoBackupManualSchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    full_backup_frequency: cdktf.stringToTerraform(struct!.fullBackupFrequency),
    full_backup_start_hour: cdktf.numberToTerraform(struct!.fullBackupStartHour),
    full_backup_window_in_hours: cdktf.numberToTerraform(struct!.fullBackupWindowInHours),
    log_backup_frequency_in_minutes: cdktf.numberToTerraform(struct!.logBackupFrequencyInMinutes),
  }
}

export interface MssqlVirtualMachineAutoBackup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#encryption_enabled MssqlVirtualMachine#encryption_enabled}
  */
  readonly encryptionEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#encryption_password MssqlVirtualMachine#encryption_password}
  */
  readonly encryptionPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#retention_period_in_days MssqlVirtualMachine#retention_period_in_days}
  */
  readonly retentionPeriodInDays: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#storage_account_access_key MssqlVirtualMachine#storage_account_access_key}
  */
  readonly storageAccountAccessKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#storage_blob_endpoint MssqlVirtualMachine#storage_blob_endpoint}
  */
  readonly storageBlobEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#system_databases_backup_enabled MssqlVirtualMachine#system_databases_backup_enabled}
  */
  readonly systemDatabasesBackupEnabled?: boolean;
  /**
  * manual_schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#manual_schedule MssqlVirtualMachine#manual_schedule}
  */
  readonly manualSchedule?: MssqlVirtualMachineAutoBackupManualSchedule[];
}

function mssqlVirtualMachineAutoBackupToTerraform(struct?: MssqlVirtualMachineAutoBackup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encryption_enabled: cdktf.booleanToTerraform(struct!.encryptionEnabled),
    encryption_password: cdktf.stringToTerraform(struct!.encryptionPassword),
    retention_period_in_days: cdktf.numberToTerraform(struct!.retentionPeriodInDays),
    storage_account_access_key: cdktf.stringToTerraform(struct!.storageAccountAccessKey),
    storage_blob_endpoint: cdktf.stringToTerraform(struct!.storageBlobEndpoint),
    system_databases_backup_enabled: cdktf.booleanToTerraform(struct!.systemDatabasesBackupEnabled),
    manual_schedule: cdktf.listMapper(mssqlVirtualMachineAutoBackupManualScheduleToTerraform)(struct!.manualSchedule),
  }
}

export interface MssqlVirtualMachineAutoPatching {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#day_of_week MssqlVirtualMachine#day_of_week}
  */
  readonly dayOfWeek: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#maintenance_window_duration_in_minutes MssqlVirtualMachine#maintenance_window_duration_in_minutes}
  */
  readonly maintenanceWindowDurationInMinutes: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#maintenance_window_starting_hour MssqlVirtualMachine#maintenance_window_starting_hour}
  */
  readonly maintenanceWindowStartingHour: number;
}

function mssqlVirtualMachineAutoPatchingToTerraform(struct?: MssqlVirtualMachineAutoPatching): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    maintenance_window_duration_in_minutes: cdktf.numberToTerraform(struct!.maintenanceWindowDurationInMinutes),
    maintenance_window_starting_hour: cdktf.numberToTerraform(struct!.maintenanceWindowStartingHour),
  }
}

export interface MssqlVirtualMachineKeyVaultCredential {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#key_vault_url MssqlVirtualMachine#key_vault_url}
  */
  readonly keyVaultUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#name MssqlVirtualMachine#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#service_principal_name MssqlVirtualMachine#service_principal_name}
  */
  readonly servicePrincipalName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#service_principal_secret MssqlVirtualMachine#service_principal_secret}
  */
  readonly servicePrincipalSecret: string;
}

function mssqlVirtualMachineKeyVaultCredentialToTerraform(struct?: MssqlVirtualMachineKeyVaultCredential): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key_vault_url: cdktf.stringToTerraform(struct!.keyVaultUrl),
    name: cdktf.stringToTerraform(struct!.name),
    service_principal_name: cdktf.stringToTerraform(struct!.servicePrincipalName),
    service_principal_secret: cdktf.stringToTerraform(struct!.servicePrincipalSecret),
  }
}

export interface MssqlVirtualMachineStorageConfigurationDataSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#default_file_path MssqlVirtualMachine#default_file_path}
  */
  readonly defaultFilePath: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#luns MssqlVirtualMachine#luns}
  */
  readonly luns: number[];
}

function mssqlVirtualMachineStorageConfigurationDataSettingsToTerraform(struct?: MssqlVirtualMachineStorageConfigurationDataSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_file_path: cdktf.stringToTerraform(struct!.defaultFilePath),
    luns: cdktf.listMapper(cdktf.numberToTerraform)(struct!.luns),
  }
}

export interface MssqlVirtualMachineStorageConfigurationLogSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#default_file_path MssqlVirtualMachine#default_file_path}
  */
  readonly defaultFilePath: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#luns MssqlVirtualMachine#luns}
  */
  readonly luns: number[];
}

function mssqlVirtualMachineStorageConfigurationLogSettingsToTerraform(struct?: MssqlVirtualMachineStorageConfigurationLogSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_file_path: cdktf.stringToTerraform(struct!.defaultFilePath),
    luns: cdktf.listMapper(cdktf.numberToTerraform)(struct!.luns),
  }
}

export interface MssqlVirtualMachineStorageConfigurationTempDbSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#default_file_path MssqlVirtualMachine#default_file_path}
  */
  readonly defaultFilePath: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#luns MssqlVirtualMachine#luns}
  */
  readonly luns: number[];
}

function mssqlVirtualMachineStorageConfigurationTempDbSettingsToTerraform(struct?: MssqlVirtualMachineStorageConfigurationTempDbSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_file_path: cdktf.stringToTerraform(struct!.defaultFilePath),
    luns: cdktf.listMapper(cdktf.numberToTerraform)(struct!.luns),
  }
}

export interface MssqlVirtualMachineStorageConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#disk_type MssqlVirtualMachine#disk_type}
  */
  readonly diskType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#storage_workload_type MssqlVirtualMachine#storage_workload_type}
  */
  readonly storageWorkloadType: string;
  /**
  * data_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#data_settings MssqlVirtualMachine#data_settings}
  */
  readonly dataSettings?: MssqlVirtualMachineStorageConfigurationDataSettings[];
  /**
  * log_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#log_settings MssqlVirtualMachine#log_settings}
  */
  readonly logSettings?: MssqlVirtualMachineStorageConfigurationLogSettings[];
  /**
  * temp_db_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#temp_db_settings MssqlVirtualMachine#temp_db_settings}
  */
  readonly tempDbSettings?: MssqlVirtualMachineStorageConfigurationTempDbSettings[];
}

function mssqlVirtualMachineStorageConfigurationToTerraform(struct?: MssqlVirtualMachineStorageConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    storage_workload_type: cdktf.stringToTerraform(struct!.storageWorkloadType),
    data_settings: cdktf.listMapper(mssqlVirtualMachineStorageConfigurationDataSettingsToTerraform)(struct!.dataSettings),
    log_settings: cdktf.listMapper(mssqlVirtualMachineStorageConfigurationLogSettingsToTerraform)(struct!.logSettings),
    temp_db_settings: cdktf.listMapper(mssqlVirtualMachineStorageConfigurationTempDbSettingsToTerraform)(struct!.tempDbSettings),
  }
}

export interface MssqlVirtualMachineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#create MssqlVirtualMachine#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#delete MssqlVirtualMachine#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#read MssqlVirtualMachine#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html#update MssqlVirtualMachine#update}
  */
  readonly update?: string;
}

function mssqlVirtualMachineTimeoutsToTerraform(struct?: MssqlVirtualMachineTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html azurerm_mssql_virtual_machine}
*/
export class MssqlVirtualMachine extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/mssql_virtual_machine.html azurerm_mssql_virtual_machine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MssqlVirtualMachineConfig
  */
  public constructor(scope: Construct, id: string, config: MssqlVirtualMachineConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mssql_virtual_machine',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._rServicesEnabled = config.rServicesEnabled;
    this._sqlConnectivityPort = config.sqlConnectivityPort;
    this._sqlConnectivityType = config.sqlConnectivityType;
    this._sqlConnectivityUpdatePassword = config.sqlConnectivityUpdatePassword;
    this._sqlConnectivityUpdateUsername = config.sqlConnectivityUpdateUsername;
    this._sqlLicenseType = config.sqlLicenseType;
    this._tags = config.tags;
    this._virtualMachineId = config.virtualMachineId;
    this._autoBackup = config.autoBackup;
    this._autoPatching = config.autoPatching;
    this._keyVaultCredential = config.keyVaultCredential;
    this._storageConfiguration = config.storageConfiguration;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // r_services_enabled - computed: false, optional: true, required: false
  private _rServicesEnabled?: boolean;
  public get rServicesEnabled() {
    return this.getBooleanAttribute('r_services_enabled');
  }
  public set rServicesEnabled(value: boolean ) {
    this._rServicesEnabled = value;
  }
  public resetRServicesEnabled() {
    this._rServicesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rServicesEnabledInput() {
    return this._rServicesEnabled
  }

  // sql_connectivity_port - computed: false, optional: true, required: false
  private _sqlConnectivityPort?: number;
  public get sqlConnectivityPort() {
    return this.getNumberAttribute('sql_connectivity_port');
  }
  public set sqlConnectivityPort(value: number ) {
    this._sqlConnectivityPort = value;
  }
  public resetSqlConnectivityPort() {
    this._sqlConnectivityPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlConnectivityPortInput() {
    return this._sqlConnectivityPort
  }

  // sql_connectivity_type - computed: false, optional: true, required: false
  private _sqlConnectivityType?: string;
  public get sqlConnectivityType() {
    return this.getStringAttribute('sql_connectivity_type');
  }
  public set sqlConnectivityType(value: string ) {
    this._sqlConnectivityType = value;
  }
  public resetSqlConnectivityType() {
    this._sqlConnectivityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlConnectivityTypeInput() {
    return this._sqlConnectivityType
  }

  // sql_connectivity_update_password - computed: false, optional: true, required: false
  private _sqlConnectivityUpdatePassword?: string;
  public get sqlConnectivityUpdatePassword() {
    return this.getStringAttribute('sql_connectivity_update_password');
  }
  public set sqlConnectivityUpdatePassword(value: string ) {
    this._sqlConnectivityUpdatePassword = value;
  }
  public resetSqlConnectivityUpdatePassword() {
    this._sqlConnectivityUpdatePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlConnectivityUpdatePasswordInput() {
    return this._sqlConnectivityUpdatePassword
  }

  // sql_connectivity_update_username - computed: false, optional: true, required: false
  private _sqlConnectivityUpdateUsername?: string;
  public get sqlConnectivityUpdateUsername() {
    return this.getStringAttribute('sql_connectivity_update_username');
  }
  public set sqlConnectivityUpdateUsername(value: string ) {
    this._sqlConnectivityUpdateUsername = value;
  }
  public resetSqlConnectivityUpdateUsername() {
    this._sqlConnectivityUpdateUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlConnectivityUpdateUsernameInput() {
    return this._sqlConnectivityUpdateUsername
  }

  // sql_license_type - computed: false, optional: false, required: true
  private _sqlLicenseType: string;
  public get sqlLicenseType() {
    return this.getStringAttribute('sql_license_type');
  }
  public set sqlLicenseType(value: string) {
    this._sqlLicenseType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlLicenseTypeInput() {
    return this._sqlLicenseType
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

  // auto_backup - computed: false, optional: true, required: false
  private _autoBackup?: MssqlVirtualMachineAutoBackup[];
  public get autoBackup() {
    return this.interpolationForAttribute('auto_backup') as any;
  }
  public set autoBackup(value: MssqlVirtualMachineAutoBackup[] ) {
    this._autoBackup = value;
  }
  public resetAutoBackup() {
    this._autoBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBackupInput() {
    return this._autoBackup
  }

  // auto_patching - computed: false, optional: true, required: false
  private _autoPatching?: MssqlVirtualMachineAutoPatching[];
  public get autoPatching() {
    return this.interpolationForAttribute('auto_patching') as any;
  }
  public set autoPatching(value: MssqlVirtualMachineAutoPatching[] ) {
    this._autoPatching = value;
  }
  public resetAutoPatching() {
    this._autoPatching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPatchingInput() {
    return this._autoPatching
  }

  // key_vault_credential - computed: false, optional: true, required: false
  private _keyVaultCredential?: MssqlVirtualMachineKeyVaultCredential[];
  public get keyVaultCredential() {
    return this.interpolationForAttribute('key_vault_credential') as any;
  }
  public set keyVaultCredential(value: MssqlVirtualMachineKeyVaultCredential[] ) {
    this._keyVaultCredential = value;
  }
  public resetKeyVaultCredential() {
    this._keyVaultCredential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultCredentialInput() {
    return this._keyVaultCredential
  }

  // storage_configuration - computed: false, optional: true, required: false
  private _storageConfiguration?: MssqlVirtualMachineStorageConfiguration[];
  public get storageConfiguration() {
    return this.interpolationForAttribute('storage_configuration') as any;
  }
  public set storageConfiguration(value: MssqlVirtualMachineStorageConfiguration[] ) {
    this._storageConfiguration = value;
  }
  public resetStorageConfiguration() {
    this._storageConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConfigurationInput() {
    return this._storageConfiguration
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MssqlVirtualMachineTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MssqlVirtualMachineTimeouts ) {
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
      r_services_enabled: cdktf.booleanToTerraform(this._rServicesEnabled),
      sql_connectivity_port: cdktf.numberToTerraform(this._sqlConnectivityPort),
      sql_connectivity_type: cdktf.stringToTerraform(this._sqlConnectivityType),
      sql_connectivity_update_password: cdktf.stringToTerraform(this._sqlConnectivityUpdatePassword),
      sql_connectivity_update_username: cdktf.stringToTerraform(this._sqlConnectivityUpdateUsername),
      sql_license_type: cdktf.stringToTerraform(this._sqlLicenseType),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      virtual_machine_id: cdktf.stringToTerraform(this._virtualMachineId),
      auto_backup: cdktf.listMapper(mssqlVirtualMachineAutoBackupToTerraform)(this._autoBackup),
      auto_patching: cdktf.listMapper(mssqlVirtualMachineAutoPatchingToTerraform)(this._autoPatching),
      key_vault_credential: cdktf.listMapper(mssqlVirtualMachineKeyVaultCredentialToTerraform)(this._keyVaultCredential),
      storage_configuration: cdktf.listMapper(mssqlVirtualMachineStorageConfigurationToTerraform)(this._storageConfiguration),
      timeouts: mssqlVirtualMachineTimeoutsToTerraform(this._timeouts),
    };
  }
}
