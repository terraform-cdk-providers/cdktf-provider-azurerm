// https://www.terraform.io/docs/providers/azurerm/r/hpc_cache.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HpcCacheConfig extends cdktf.TerraformMetaArguments {
  readonly cacheSizeInGb: number;
  readonly location: string;
  readonly mtu?: number;
  readonly name: string;
  readonly ntpServer?: string;
  readonly resourceGroupName: string;
  readonly rootSquashEnabled?: boolean;
  readonly skuName: string;
  readonly subnetId: string;
  readonly tags?: { [key: string]: string };
  /** default_access_policy block */
  readonly defaultAccessPolicy?: HpcCacheDefaultAccessPolicy[];
  /** directory_active_directory block */
  readonly directoryActiveDirectory?: HpcCacheDirectoryActiveDirectory[];
  /** directory_flat_file block */
  readonly directoryFlatFile?: HpcCacheDirectoryFlatFile[];
  /** directory_ldap block */
  readonly directoryLdap?: HpcCacheDirectoryLdap[];
  /** dns block */
  readonly dns?: HpcCacheDns[];
  /** timeouts block */
  readonly timeouts?: HpcCacheTimeouts;
}
export interface HpcCacheDefaultAccessPolicyAccessRule {
  readonly access: string;
  readonly anonymousGid?: number;
  readonly anonymousUid?: number;
  readonly filter?: string;
  readonly rootSquashEnabled?: boolean;
  readonly scope: string;
  readonly submountAccessEnabled?: boolean;
  readonly suidEnabled?: boolean;
}

function hpcCacheDefaultAccessPolicyAccessRuleToTerraform(struct?: HpcCacheDefaultAccessPolicyAccessRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    anonymous_gid: cdktf.numberToTerraform(struct!.anonymousGid),
    anonymous_uid: cdktf.numberToTerraform(struct!.anonymousUid),
    filter: cdktf.stringToTerraform(struct!.filter),
    root_squash_enabled: cdktf.booleanToTerraform(struct!.rootSquashEnabled),
    scope: cdktf.stringToTerraform(struct!.scope),
    submount_access_enabled: cdktf.booleanToTerraform(struct!.submountAccessEnabled),
    suid_enabled: cdktf.booleanToTerraform(struct!.suidEnabled),
  }
}

export interface HpcCacheDefaultAccessPolicy {
  /** access_rule block */
  readonly accessRule: HpcCacheDefaultAccessPolicyAccessRule[];
}

function hpcCacheDefaultAccessPolicyToTerraform(struct?: HpcCacheDefaultAccessPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_rule: cdktf.listMapper(hpcCacheDefaultAccessPolicyAccessRuleToTerraform)(struct!.accessRule),
  }
}

export interface HpcCacheDirectoryActiveDirectory {
  readonly cacheNetbiosName: string;
  readonly dnsPrimaryIp: string;
  readonly dnsSecondaryIp?: string;
  readonly domainName: string;
  readonly domainNetbiosName: string;
  readonly password: string;
  readonly username: string;
}

function hpcCacheDirectoryActiveDirectoryToTerraform(struct?: HpcCacheDirectoryActiveDirectory): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cache_netbios_name: cdktf.stringToTerraform(struct!.cacheNetbiosName),
    dns_primary_ip: cdktf.stringToTerraform(struct!.dnsPrimaryIp),
    dns_secondary_ip: cdktf.stringToTerraform(struct!.dnsSecondaryIp),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    domain_netbios_name: cdktf.stringToTerraform(struct!.domainNetbiosName),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface HpcCacheDirectoryFlatFile {
  readonly groupFileUri: string;
  readonly passwordFileUri: string;
}

function hpcCacheDirectoryFlatFileToTerraform(struct?: HpcCacheDirectoryFlatFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    group_file_uri: cdktf.stringToTerraform(struct!.groupFileUri),
    password_file_uri: cdktf.stringToTerraform(struct!.passwordFileUri),
  }
}

export interface HpcCacheDirectoryLdapBind {
  readonly dn: string;
  readonly password: string;
}

function hpcCacheDirectoryLdapBindToTerraform(struct?: HpcCacheDirectoryLdapBind): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dn: cdktf.stringToTerraform(struct!.dn),
    password: cdktf.stringToTerraform(struct!.password),
  }
}

export interface HpcCacheDirectoryLdap {
  readonly baseDn: string;
  readonly certificateValidationUri?: string;
  readonly downloadCertificateAutomatically?: boolean;
  readonly encrypted?: boolean;
  readonly server: string;
  /** bind block */
  readonly bind?: HpcCacheDirectoryLdapBind[];
}

function hpcCacheDirectoryLdapToTerraform(struct?: HpcCacheDirectoryLdap): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    base_dn: cdktf.stringToTerraform(struct!.baseDn),
    certificate_validation_uri: cdktf.stringToTerraform(struct!.certificateValidationUri),
    download_certificate_automatically: cdktf.booleanToTerraform(struct!.downloadCertificateAutomatically),
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    server: cdktf.stringToTerraform(struct!.server),
    bind: cdktf.listMapper(hpcCacheDirectoryLdapBindToTerraform)(struct!.bind),
  }
}

export interface HpcCacheDns {
  readonly searchDomain?: string;
  readonly servers: string[];
}

function hpcCacheDnsToTerraform(struct?: HpcCacheDns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    search_domain: cdktf.stringToTerraform(struct!.searchDomain),
    servers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.servers),
  }
}

export interface HpcCacheTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function hpcCacheTimeoutsToTerraform(struct?: HpcCacheTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class HpcCache extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: HpcCacheConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_hpc_cache',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cacheSizeInGb = config.cacheSizeInGb;
    this._location = config.location;
    this._mtu = config.mtu;
    this._name = config.name;
    this._ntpServer = config.ntpServer;
    this._resourceGroupName = config.resourceGroupName;
    this._rootSquashEnabled = config.rootSquashEnabled;
    this._skuName = config.skuName;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._defaultAccessPolicy = config.defaultAccessPolicy;
    this._directoryActiveDirectory = config.directoryActiveDirectory;
    this._directoryFlatFile = config.directoryFlatFile;
    this._directoryLdap = config.directoryLdap;
    this._dns = config.dns;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_size_in_gb - computed: false, optional: false, required: true
  private _cacheSizeInGb: number;
  public get cacheSizeInGb() {
    return this.getNumberAttribute('cache_size_in_gb');
  }
  public set cacheSizeInGb(value: number) {
    this._cacheSizeInGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheSizeInGbInput() {
    return this._cacheSizeInGb
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

  // mount_addresses - computed: true, optional: false, required: false
  public get mountAddresses() {
    return this.getListAttribute('mount_addresses');
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number;
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number ) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu
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

  // ntp_server - computed: false, optional: true, required: false
  private _ntpServer?: string;
  public get ntpServer() {
    return this.getStringAttribute('ntp_server');
  }
  public set ntpServer(value: string ) {
    this._ntpServer = value;
  }
  public resetNtpServer() {
    this._ntpServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServerInput() {
    return this._ntpServer
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

  // root_squash_enabled - computed: true, optional: true, required: false
  private _rootSquashEnabled?: boolean;
  public get rootSquashEnabled() {
    return this.getBooleanAttribute('root_squash_enabled');
  }
  public set rootSquashEnabled(value: boolean) {
    this._rootSquashEnabled = value;
  }
  public resetRootSquashEnabled() {
    this._rootSquashEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootSquashEnabledInput() {
    return this._rootSquashEnabled
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

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId: string;
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
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

  // default_access_policy - computed: false, optional: true, required: false
  private _defaultAccessPolicy?: HpcCacheDefaultAccessPolicy[];
  public get defaultAccessPolicy() {
    return this.interpolationForAttribute('default_access_policy') as any;
  }
  public set defaultAccessPolicy(value: HpcCacheDefaultAccessPolicy[] ) {
    this._defaultAccessPolicy = value;
  }
  public resetDefaultAccessPolicy() {
    this._defaultAccessPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAccessPolicyInput() {
    return this._defaultAccessPolicy
  }

  // directory_active_directory - computed: false, optional: true, required: false
  private _directoryActiveDirectory?: HpcCacheDirectoryActiveDirectory[];
  public get directoryActiveDirectory() {
    return this.interpolationForAttribute('directory_active_directory') as any;
  }
  public set directoryActiveDirectory(value: HpcCacheDirectoryActiveDirectory[] ) {
    this._directoryActiveDirectory = value;
  }
  public resetDirectoryActiveDirectory() {
    this._directoryActiveDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryActiveDirectoryInput() {
    return this._directoryActiveDirectory
  }

  // directory_flat_file - computed: false, optional: true, required: false
  private _directoryFlatFile?: HpcCacheDirectoryFlatFile[];
  public get directoryFlatFile() {
    return this.interpolationForAttribute('directory_flat_file') as any;
  }
  public set directoryFlatFile(value: HpcCacheDirectoryFlatFile[] ) {
    this._directoryFlatFile = value;
  }
  public resetDirectoryFlatFile() {
    this._directoryFlatFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryFlatFileInput() {
    return this._directoryFlatFile
  }

  // directory_ldap - computed: false, optional: true, required: false
  private _directoryLdap?: HpcCacheDirectoryLdap[];
  public get directoryLdap() {
    return this.interpolationForAttribute('directory_ldap') as any;
  }
  public set directoryLdap(value: HpcCacheDirectoryLdap[] ) {
    this._directoryLdap = value;
  }
  public resetDirectoryLdap() {
    this._directoryLdap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryLdapInput() {
    return this._directoryLdap
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: HpcCacheDns[];
  public get dns() {
    return this.interpolationForAttribute('dns') as any;
  }
  public set dns(value: HpcCacheDns[] ) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: HpcCacheTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: HpcCacheTimeouts ) {
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
      cache_size_in_gb: cdktf.numberToTerraform(this._cacheSizeInGb),
      location: cdktf.stringToTerraform(this._location),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      ntp_server: cdktf.stringToTerraform(this._ntpServer),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      root_squash_enabled: cdktf.booleanToTerraform(this._rootSquashEnabled),
      sku_name: cdktf.stringToTerraform(this._skuName),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      default_access_policy: cdktf.listMapper(hpcCacheDefaultAccessPolicyToTerraform)(this._defaultAccessPolicy),
      directory_active_directory: cdktf.listMapper(hpcCacheDirectoryActiveDirectoryToTerraform)(this._directoryActiveDirectory),
      directory_flat_file: cdktf.listMapper(hpcCacheDirectoryFlatFileToTerraform)(this._directoryFlatFile),
      directory_ldap: cdktf.listMapper(hpcCacheDirectoryLdapToTerraform)(this._directoryLdap),
      dns: cdktf.listMapper(hpcCacheDnsToTerraform)(this._dns),
      timeouts: hpcCacheTimeoutsToTerraform(this._timeouts),
    };
  }
}
