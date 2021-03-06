// https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sftp.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFactoryLinkedServiceSftpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sftp.html#additional_properties DataFactoryLinkedServiceSftp#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sftp.html#annotations DataFactoryLinkedServiceSftp#annotations}
  */
  readonly annotations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sftp.html#authentication_type DataFactoryLinkedServiceSftp#authentication_type}
  */
  readonly authenticationType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sftp.html#data_factory_name DataFactoryLinkedServiceSftp#data_factory_name}
  */
  readonly dataFactoryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sftp.html#description DataFactoryLinkedServiceSftp#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sftp.html#host DataFactoryLinkedServiceSftp#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sftp.html#host_key_fingerprint DataFactoryLinkedServiceSftp#host_key_fingerprint}
  */
  readonly hostKeyFingerprint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sftp.html#integration_runtime_name DataFactoryLinkedServiceSftp#integration_runtime_name}
  */
  readonly integrationRuntimeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sftp.html#name DataFactoryLinkedServiceSftp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sftp.html#parameters DataFactoryLinkedServiceSftp#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sftp.html#password DataFactoryLinkedServiceSftp#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sftp.html#port DataFactoryLinkedServiceSftp#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sftp.html#resource_group_name DataFactoryLinkedServiceSftp#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sftp.html#skip_host_key_validation DataFactoryLinkedServiceSftp#skip_host_key_validation}
  */
  readonly skipHostKeyValidation?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sftp.html#username DataFactoryLinkedServiceSftp#username}
  */
  readonly username: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sftp.html#timeouts DataFactoryLinkedServiceSftp#timeouts}
  */
  readonly timeouts?: DataFactoryLinkedServiceSftpTimeouts;
}
export interface DataFactoryLinkedServiceSftpTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sftp.html#create DataFactoryLinkedServiceSftp#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sftp.html#delete DataFactoryLinkedServiceSftp#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sftp.html#read DataFactoryLinkedServiceSftp#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sftp.html#update DataFactoryLinkedServiceSftp#update}
  */
  readonly update?: string;
}

function dataFactoryLinkedServiceSftpTimeoutsToTerraform(struct?: DataFactoryLinkedServiceSftpTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sftp.html azurerm_data_factory_linked_service_sftp}
*/
export class DataFactoryLinkedServiceSftp extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_sftp.html azurerm_data_factory_linked_service_sftp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFactoryLinkedServiceSftpConfig
  */
  public constructor(scope: Construct, id: string, config: DataFactoryLinkedServiceSftpConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_linked_service_sftp',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._additionalProperties = config.additionalProperties;
    this._annotations = config.annotations;
    this._authenticationType = config.authenticationType;
    this._dataFactoryName = config.dataFactoryName;
    this._description = config.description;
    this._host = config.host;
    this._hostKeyFingerprint = config.hostKeyFingerprint;
    this._integrationRuntimeName = config.integrationRuntimeName;
    this._name = config.name;
    this._parameters = config.parameters;
    this._password = config.password;
    this._port = config.port;
    this._resourceGroupName = config.resourceGroupName;
    this._skipHostKeyValidation = config.skipHostKeyValidation;
    this._username = config.username;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: { [key: string]: string };
  public get additionalProperties() {
    return this.interpolationForAttribute('additional_properties') as any;
  }
  public set additionalProperties(value: { [key: string]: string } ) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: string[];
  public get annotations() {
    return this.getListAttribute('annotations');
  }
  public set annotations(value: string[] ) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations
  }

  // authentication_type - computed: false, optional: false, required: true
  private _authenticationType: string;
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType
  }

  // data_factory_name - computed: false, optional: false, required: true
  private _dataFactoryName: string;
  public get dataFactoryName() {
    return this.getStringAttribute('data_factory_name');
  }
  public set dataFactoryName(value: string) {
    this._dataFactoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFactoryNameInput() {
    return this._dataFactoryName
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // host - computed: false, optional: false, required: true
  private _host: string;
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host
  }

  // host_key_fingerprint - computed: false, optional: true, required: false
  private _hostKeyFingerprint?: string;
  public get hostKeyFingerprint() {
    return this.getStringAttribute('host_key_fingerprint');
  }
  public set hostKeyFingerprint(value: string ) {
    this._hostKeyFingerprint = value;
  }
  public resetHostKeyFingerprint() {
    this._hostKeyFingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostKeyFingerprintInput() {
    return this._hostKeyFingerprint
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_runtime_name - computed: false, optional: true, required: false
  private _integrationRuntimeName?: string;
  public get integrationRuntimeName() {
    return this.getStringAttribute('integration_runtime_name');
  }
  public set integrationRuntimeName(value: string ) {
    this._integrationRuntimeName = value;
  }
  public resetIntegrationRuntimeName() {
    this._integrationRuntimeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationRuntimeNameInput() {
    return this._integrationRuntimeName
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string };
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } ) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
  }

  // password - computed: false, optional: false, required: true
  private _password: string;
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password
  }

  // port - computed: false, optional: false, required: true
  private _port: number;
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
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

  // skip_host_key_validation - computed: false, optional: true, required: false
  private _skipHostKeyValidation?: boolean;
  public get skipHostKeyValidation() {
    return this.getBooleanAttribute('skip_host_key_validation');
  }
  public set skipHostKeyValidation(value: boolean ) {
    this._skipHostKeyValidation = value;
  }
  public resetSkipHostKeyValidation() {
    this._skipHostKeyValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipHostKeyValidationInput() {
    return this._skipHostKeyValidation
  }

  // username - computed: false, optional: false, required: true
  private _username: string;
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataFactoryLinkedServiceSftpTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataFactoryLinkedServiceSftpTimeouts ) {
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
      additional_properties: cdktf.hashMapper(cdktf.anyToTerraform)(this._additionalProperties),
      annotations: cdktf.listMapper(cdktf.stringToTerraform)(this._annotations),
      authentication_type: cdktf.stringToTerraform(this._authenticationType),
      data_factory_name: cdktf.stringToTerraform(this._dataFactoryName),
      description: cdktf.stringToTerraform(this._description),
      host: cdktf.stringToTerraform(this._host),
      host_key_fingerprint: cdktf.stringToTerraform(this._hostKeyFingerprint),
      integration_runtime_name: cdktf.stringToTerraform(this._integrationRuntimeName),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      skip_host_key_validation: cdktf.booleanToTerraform(this._skipHostKeyValidation),
      username: cdktf.stringToTerraform(this._username),
      timeouts: dataFactoryLinkedServiceSftpTimeoutsToTerraform(this._timeouts),
    };
  }
}
