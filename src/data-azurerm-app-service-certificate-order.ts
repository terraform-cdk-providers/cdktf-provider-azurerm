// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_app_service_certificate_order.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DataAzurermAppServiceCertificateOrderConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermAppServiceCertificateOrderTimeouts;
}
export class DataAzurermAppServiceCertificateOrderCertificates extends ComplexComputedList {

  // certificate_name - computed: true, optional: false, required: true
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
  }

  // key_vault_id - computed: true, optional: false, required: true
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }

  // key_vault_secret_name - computed: true, optional: false, required: true
  public get keyVaultSecretName() {
    return this.getStringAttribute('key_vault_secret_name');
  }

  // provisioning_state - computed: true, optional: false, required: true
  public get provisioningState() {
    return this.getStringAttribute('provisioning_state');
  }
}
export interface DataAzurermAppServiceCertificateOrderTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermAppServiceCertificateOrder extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermAppServiceCertificateOrderConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_app_service_certificate_order',
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
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_service_certificate_not_renewable_reasons - computed: true, optional: false, required: true
  public get appServiceCertificateNotRenewableReasons() {
    return this.getListAttribute('app_service_certificate_not_renewable_reasons');
  }

  // auto_renew - computed: true, optional: false, required: true
  public get autoRenew() {
    return this.getBooleanAttribute('auto_renew');
  }

  // certificates - computed: true, optional: false, required: true
  public certificates(index: string) {
    return new DataAzurermAppServiceCertificateOrderCertificates(this, 'certificates', index);
  }

  // csr - computed: true, optional: false, required: true
  public get csr() {
    return this.getStringAttribute('csr');
  }

  // distinguished_name - computed: true, optional: false, required: true
  public get distinguishedName() {
    return this.getStringAttribute('distinguished_name');
  }

  // domain_verification_token - computed: true, optional: false, required: true
  public get domainVerificationToken() {
    return this.getStringAttribute('domain_verification_token');
  }

  // expiration_time - computed: true, optional: false, required: true
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // intermediate_thumbprint - computed: true, optional: false, required: true
  public get intermediateThumbprint() {
    return this.getStringAttribute('intermediate_thumbprint');
  }

  // is_private_key_external - computed: true, optional: false, required: true
  public get isPrivateKeyExternal() {
    return this.getBooleanAttribute('is_private_key_external');
  }

  // key_size - computed: true, optional: false, required: true
  public get keySize() {
    return this.getNumberAttribute('key_size');
  }

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // product_type - computed: true, optional: false, required: true
  public get productType() {
    return this.getStringAttribute('product_type');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // root_thumbprint - computed: true, optional: false, required: true
  public get rootThumbprint() {
    return this.getStringAttribute('root_thumbprint');
  }

  // signed_certificate_thumbprint - computed: true, optional: false, required: true
  public get signedCertificateThumbprint() {
    return this.getStringAttribute('signed_certificate_thumbprint');
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: true
  public tags(key: string): string {
    return new StringMap(this, 'tags').lookup(key);
  }

  // validity_in_years - computed: true, optional: false, required: true
  public get validityInYears() {
    return this.getNumberAttribute('validity_in_years');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermAppServiceCertificateOrderTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermAppServiceCertificateOrderTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
