// https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_java_deployment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpringCloudJavaDeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_java_deployment.html#cpu SpringCloudJavaDeployment#cpu}
  */
  readonly cpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_java_deployment.html#environment_variables SpringCloudJavaDeployment#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_java_deployment.html#instance_count SpringCloudJavaDeployment#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_java_deployment.html#jvm_options SpringCloudJavaDeployment#jvm_options}
  */
  readonly jvmOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_java_deployment.html#memory_in_gb SpringCloudJavaDeployment#memory_in_gb}
  */
  readonly memoryInGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_java_deployment.html#name SpringCloudJavaDeployment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_java_deployment.html#runtime_version SpringCloudJavaDeployment#runtime_version}
  */
  readonly runtimeVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_java_deployment.html#spring_cloud_app_id SpringCloudJavaDeployment#spring_cloud_app_id}
  */
  readonly springCloudAppId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_java_deployment.html#timeouts SpringCloudJavaDeployment#timeouts}
  */
  readonly timeouts?: SpringCloudJavaDeploymentTimeouts;
}
export interface SpringCloudJavaDeploymentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_java_deployment.html#create SpringCloudJavaDeployment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_java_deployment.html#delete SpringCloudJavaDeployment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_java_deployment.html#read SpringCloudJavaDeployment#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_java_deployment.html#update SpringCloudJavaDeployment#update}
  */
  readonly update?: string;
}

function springCloudJavaDeploymentTimeoutsToTerraform(struct?: SpringCloudJavaDeploymentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_java_deployment.html azurerm_spring_cloud_java_deployment}
*/
export class SpringCloudJavaDeployment extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_java_deployment.html azurerm_spring_cloud_java_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpringCloudJavaDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: SpringCloudJavaDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_spring_cloud_java_deployment',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cpu = config.cpu;
    this._environmentVariables = config.environmentVariables;
    this._instanceCount = config.instanceCount;
    this._jvmOptions = config.jvmOptions;
    this._memoryInGb = config.memoryInGb;
    this._name = config.name;
    this._runtimeVersion = config.runtimeVersion;
    this._springCloudAppId = config.springCloudAppId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number;
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number ) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu
  }

  // environment_variables - computed: false, optional: true, required: false
  private _environmentVariables?: { [key: string]: string };
  public get environmentVariables() {
    return this.interpolationForAttribute('environment_variables') as any;
  }
  public set environmentVariables(value: { [key: string]: string } ) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_count - computed: false, optional: true, required: false
  private _instanceCount?: number;
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number ) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount
  }

  // jvm_options - computed: false, optional: true, required: false
  private _jvmOptions?: string;
  public get jvmOptions() {
    return this.getStringAttribute('jvm_options');
  }
  public set jvmOptions(value: string ) {
    this._jvmOptions = value;
  }
  public resetJvmOptions() {
    this._jvmOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jvmOptionsInput() {
    return this._jvmOptions
  }

  // memory_in_gb - computed: false, optional: true, required: false
  private _memoryInGb?: number;
  public get memoryInGb() {
    return this.getNumberAttribute('memory_in_gb');
  }
  public set memoryInGb(value: number ) {
    this._memoryInGb = value;
  }
  public resetMemoryInGb() {
    this._memoryInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInGbInput() {
    return this._memoryInGb
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

  // runtime_version - computed: false, optional: true, required: false
  private _runtimeVersion?: string;
  public get runtimeVersion() {
    return this.getStringAttribute('runtime_version');
  }
  public set runtimeVersion(value: string ) {
    this._runtimeVersion = value;
  }
  public resetRuntimeVersion() {
    this._runtimeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeVersionInput() {
    return this._runtimeVersion
  }

  // spring_cloud_app_id - computed: false, optional: false, required: true
  private _springCloudAppId: string;
  public get springCloudAppId() {
    return this.getStringAttribute('spring_cloud_app_id');
  }
  public set springCloudAppId(value: string) {
    this._springCloudAppId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get springCloudAppIdInput() {
    return this._springCloudAppId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SpringCloudJavaDeploymentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SpringCloudJavaDeploymentTimeouts ) {
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
      cpu: cdktf.numberToTerraform(this._cpu),
      environment_variables: cdktf.hashMapper(cdktf.anyToTerraform)(this._environmentVariables),
      instance_count: cdktf.numberToTerraform(this._instanceCount),
      jvm_options: cdktf.stringToTerraform(this._jvmOptions),
      memory_in_gb: cdktf.numberToTerraform(this._memoryInGb),
      name: cdktf.stringToTerraform(this._name),
      runtime_version: cdktf.stringToTerraform(this._runtimeVersion),
      spring_cloud_app_id: cdktf.stringToTerraform(this._springCloudAppId),
      timeouts: springCloudJavaDeploymentTimeoutsToTerraform(this._timeouts),
    };
  }
}
